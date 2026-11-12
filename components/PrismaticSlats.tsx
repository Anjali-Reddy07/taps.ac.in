'use client';

import React, { useEffect, useRef } from 'react';

export interface PrismaticSlatsProps {
  colors?: string[];
  backgroundColor?: string;
  flutes?: number;
  refraction?: number;
  aberration?: number;
  angle?: number;
  interactive?: boolean;
  autoplay?: boolean;
  grain?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

// Convert hex to normalized RGB array [r, g, b]
function hexToRgb(hex: string): [number, number, number] {
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c.split('').map((char) => char + char).join('');
  }
  const num = parseInt(c, 16);
  if (isNaN(num)) return [0.32, 0.15, 1.0];
  return [
    ((num >> 16) & 255) / 255,
    ((num >> 8) & 255) / 255,
    (num & 255) / 255,
  ];
}

const VERTEX_SHADER_SRC = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = (position + 1.0) * 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER_SRC = `
  precision highp float;
  varying vec2 vUv;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;
  uniform vec3 u_color1;
  uniform vec3 u_color2;
  uniform vec3 u_color3;
  uniform vec3 u_bg_color;
  uniform float u_flutes;
  uniform float u_refraction;
  uniform float u_aberration;
  uniform float u_angle;
  uniform float u_grain;

  // Simplex-inspired 2D noise & fbm for fluid liquid
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
          + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // Multi-octave fluid field
  float fluidField(vec2 p, float t, vec2 mouse) {
    vec2 q = vec2(
      snoise(p + vec2(t * 0.18, t * 0.12)),
      snoise(p + vec2(t * 0.15, -t * 0.22))
    );

    // Mouse pointer interactive fluid swirl
    float distToMouse = length(p - mouse * 2.0);
    float mouseInfluence = exp(-distToMouse * 3.5);
    q += vec2(sin(distToMouse * 8.0 - t * 2.0), cos(distToMouse * 8.0 - t * 2.0)) * mouseInfluence * 0.45;

    vec2 r = vec2(
      snoise(p + 3.0 * q + vec2(1.7, 9.2) + 0.15 * t),
      snoise(p + 3.0 * q + vec2(8.3, 2.8) - 0.12 * t)
    );

    return snoise(p + 2.5 * r + t * 0.08);
  }

  // Random hash for film grain
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec2 st = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

    // Flute rotation matrix
    float rad = radians(u_angle);
    float c = cos(rad);
    float s = sin(rad);
    mat2 rot = mat2(c, -s, s, c);
    vec2 rotSt = rot * st;

    // Slat coordinates across width
    float flutePhase = rotSt.x * u_flutes;
    float fluteIdx = floor(flutePhase);
    float fluteFrac = fract(flutePhase) - 0.5; // -0.5 to 0.5

    // Glass flute refraction profile (cylindrical ridge refraction)
    float normalX = sin(fluteFrac * 3.14159265);
    float glassThickness = cos(fluteFrac * 3.14159265);

    // Flute seam and bevel specular edges
    float fluteEdge = smoothstep(0.44, 0.5, abs(fluteFrac));
    float ridgeSpecular = pow(clamp(glassThickness, 0.0, 1.0), 12.0) * 0.25;

    // Chromatic aberration dispersion across slats
    float refractBase = normalX * (u_refraction * 0.08);
    float disp = u_aberration * 0.05;

    // Red channel refracted st
    vec2 rotStR = rotSt + vec2(refractBase * (1.0 + disp), 0.0);
    vec2 stR = st + (rot * vec2(refractBase * (1.0 + disp), 0.0));

    // Green channel refracted st
    vec2 rotStG = rotSt + vec2(refractBase, 0.0);
    vec2 stG = st + (rot * vec2(refractBase, 0.0));

    // Blue channel refracted st
    vec2 rotStB = rotSt + vec2(refractBase * (1.0 - disp), 0.0);
    vec2 stB = st + (rot * vec2(refractBase * (1.0 - disp), 0.0));

    // Sample fluid dynamics for each chromatic channel
    float fR = fluidField(stR * 1.35, u_time, u_mouse);
    float fG = fluidField(stG * 1.35, u_time, u_mouse);
    float fB = fluidField(stB * 1.35, u_time, u_mouse);

    // Liquid color mapping
    vec3 colR = mix(u_bg_color, mix(u_color1, u_color2, clamp(fR * 0.5 + 0.5, 0.0, 1.0)), smoothstep(-0.4, 0.6, fR));
    vec3 colG = mix(u_bg_color, mix(u_color2, u_color3, clamp(fG * 0.5 + 0.5, 0.0, 1.0)), smoothstep(-0.4, 0.6, fG));
    vec3 colB = mix(u_bg_color, mix(u_color3, u_color1, clamp(fB * 0.5 + 0.5, 0.0, 1.0)), smoothstep(-0.4, 0.6, fB));

    vec3 finalColor = vec3(colR.r, colG.g, colB.b);

    // Slat flute seam groove shading
    finalColor *= (1.0 - fluteEdge * 0.45);

    // Add specular glass highlight
    finalColor += vec3(ridgeSpecular);

    // Add film grain
    float grainVal = (hash(gl_FragCoord.xy + u_time * 10.0) - 0.5) * u_grain;
    finalColor += grainVal;

    // Vignette towards frame edges
    float dist = length(vUv - 0.5);
    finalColor *= smoothstep(0.9, 0.2, dist * 0.85);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export default function PrismaticSlats({
  colors = ['#3B82F6', '#8B5CF6', '#EC4899'],
  backgroundColor = '#070D21',
  flutes = 16,
  refraction = 4.0,
  aberration = 0.65,
  angle = 26,
  interactive = true,
  autoplay = true,
  grain = 0.05,
  speed = 1.0,
  className = '',
  style = {},
}: PrismaticSlatsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { antialias: true, alpha: false });
    if (!gl) {
      console.warn('WebGL not supported for PrismaticSlats.');
      return;
    }

    // Compile Shader helper
    const compileShader = (type: number, src: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('PrismaticSlats Shader error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER_SRC);
    const fragShader = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SRC);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('PrismaticSlats Program error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Fullscreen quad buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uColor1 = gl.getUniformLocation(program, 'u_color1');
    const uColor2 = gl.getUniformLocation(program, 'u_color2');
    const uColor3 = gl.getUniformLocation(program, 'u_color3');
    const uBgColor = gl.getUniformLocation(program, 'u_bg_color');
    const uFlutes = gl.getUniformLocation(program, 'u_flutes');
    const uRefraction = gl.getUniformLocation(program, 'u_refraction');
    const uAberration = gl.getUniformLocation(program, 'u_aberration');
    const uAngle = gl.getUniformLocation(program, 'u_angle');
    const uGrain = gl.getUniformLocation(program, 'u_grain');

    // Parse colors
    const rgb1 = hexToRgb(colors[0] || '#3B82F6');
    const rgb2 = hexToRgb(colors[1] || '#8B5CF6');
    const rgb3 = hexToRgb(colors[2] || colors[0] || '#EC4899');
    const bgRgb = hexToRgb(backgroundColor);

    gl.uniform3f(uColor1, rgb1[0], rgb1[1], rgb1[2]);
    gl.uniform3f(uColor2, rgb2[0], rgb2[1], rgb2[2]);
    gl.uniform3f(uColor3, rgb3[0], rgb3[1], rgb3[2]);
    gl.uniform3f(uBgColor, bgRgb[0], bgRgb[1], bgRgb[2]);
    gl.uniform1f(uFlutes, flutes);
    gl.uniform1f(uRefraction, refraction);
    gl.uniform1f(uAberration, aberration);
    gl.uniform1f(uAngle, angle);
    gl.uniform1f(uGrain, grain);

    let animationFrameId: number;
    let startTime = performance.now();

    // Resize handler
    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (width === 0 || height === 0) return;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resize);
    resize();

    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // Render loop
    const render = (time: number) => {
      const elapsed = (time - startTime) * 0.001 * speed;

      // Mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

      // Autoplay wandering path when idle
      let currentMouseX = mouseRef.current.x;
      let currentMouseY = mouseRef.current.y;
      if (autoplay) {
        currentMouseX += Math.sin(elapsed * 0.8) * 0.45;
        currentMouseY += Math.cos(elapsed * 0.6) * 0.35;
      }

      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uMouse, currentMouseX, currentMouseY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
      gl.deleteProgram(program);
      gl.deleteShader(vertShader);
      gl.deleteShader(fragShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, [
    colors,
    backgroundColor,
    flutes,
    refraction,
    aberration,
    angle,
    interactive,
    autoplay,
    grain,
    speed,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full block ${className}`}
      style={{
        pointerEvents: interactive ? 'auto' : 'none',
        ...style,
      }}
    />
  );
}
