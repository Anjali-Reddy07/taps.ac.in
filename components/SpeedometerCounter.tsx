"use client";

import { useEffect, useState, useRef, useId } from "react";
import { motion, useInView } from "framer-motion";

interface SpeedometerCounterProps {
  /** The value string (e.g., "138+", "260", "112", "102", "₹52,500") */
  value: string | number;
  /** Duration of the roll-up in seconds (default: 2.0) */
  duration?: number;
  /** Delay before starting after scrolling into view in seconds (default: 0) */
  delay?: number;
  /** Maximum vertical motion blur in pixels during top speed (default: 8) */
  maxBlur?: number;
  /** Additional CSS class names for the number wrapper */
  className?: string;
  /** Suffix class name for separate styling if desired */
  suffixClassName?: string;
}

/**
 * SpeedometerCounter
 * A high-performance, speedometer-style rolling counter with directional vertical motion blur.
 * Triggers cleanly when entering the viewport, accelerates ultra-fast, and decelerates with an ease-out curve.
 */
export default function SpeedometerCounter({
  value,
  duration = 2.0,
  delay = 0,
  maxBlur = 8,
  className = "",
  suffixClassName = "",
}: SpeedometerCounterProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "0px 0px -10% 0px" });
  const filterId = useId().replace(/:/g, "_");

  // Parse prefix, raw number, and suffix (e.g. "+", "%", "k", "Yrs")
  const valueStr = String(value).trim();
  const match = valueStr.match(/^([^\d]*)([\d,.]+)([^\d]*)$/);

  const prefix = match ? match[1] : "";
  const rawNumberStr = match ? match[2].replace(/,/g, "") : "0";
  const targetNumber = parseFloat(rawNumberStr) || 0;
  const suffix = match ? match[3] : "";
  const hasDecimals = rawNumberStr.includes(".");
  const decimalPlaces = hasDecimals ? (rawNumberStr.split(".")[1] || "").length : 0;
  const useCommas = match ? match[2].includes(",") : false;

  const [displayValue, setDisplayValue] = useState<number>(0);
  const [blurAmount, setBlurAmount] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (!isInView) return;

    // Check prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(targetNumber);
      setBlurAmount(0);
      setIsCompleted(true);
      return;
    }

    let animationFrameId: number;
    let startTime: number | null = null;
    let prevVal = 0;
    let prevTimestamp = 0;

    // Quartic ease-out: starts at maximum velocity and decelerates smoothly like a speedometer
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const timeoutId = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) {
          startTime = timestamp;
          prevTimestamp = timestamp;
        }

        const elapsed = (timestamp - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const currentNumber = easedProgress * targetNumber;

        // Calculate current instantaneous velocity (change in number / change in time)
        const dt = Math.max((timestamp - prevTimestamp) / 1000, 0.001);
        const velocity = Math.abs(currentNumber - prevVal) / dt;
        prevVal = currentNumber;
        prevTimestamp = timestamp;

        // Peak normalized velocity occurs right around 0% - 25% of progress
        // Max theoretical derivative of easeOutQuart at t=0 is 4.0
        const normalizedSpeed = Math.max(0, 4 * Math.pow(1 - progress, 3));
        const dynamicBlur = normalizedSpeed * (maxBlur / 3.8);

        setDisplayValue(currentNumber);
        setBlurAmount(progress >= 0.98 ? 0 : dynamicBlur);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setDisplayValue(targetNumber);
          setBlurAmount(0);
          setIsCompleted(true);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, targetNumber, duration, delay, maxBlur]);

  // Format display string
  const formattedNumber = () => {
    if (!isCompleted && displayValue === 0) return "0";
    let formatted = hasDecimals
      ? displayValue.toFixed(decimalPlaces)
      : Math.round(displayValue).toString();

    if (useCommas) {
      const parts = formatted.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      formatted = parts.join(".");
    }
    return formatted;
  };

  return (
    <span
      ref={containerRef}
      className={`inline-flex items-baseline relative select-none font-variant-numeric tabular-nums ${className}`}
      aria-label={valueStr}
    >
      {/* SVG Directional Vertical Motion Blur Filter */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id={`motion-blur-${filterId}`} x="-20%" y="-100%" width="140%" height="300%">
            {/* stdDeviation="X Y" where X=0 preserves crisp lateral width and Y creates authentic vertical streak */}
            <feGaussianBlur in="SourceGraphic" stdDeviation={`0 ${blurAmount.toFixed(2)}`} />
          </filter>
        </defs>
      </svg>

      {/* Prefix (e.g. ₹ or $) */}
      {prefix && <span className="opacity-80 mr-0.5">{prefix}</span>}

      {/* Spinning rolling number with vertical motion blur */}
      <motion.span
        style={{
          filter: blurAmount > 0.1 ? `url(#motion-blur-${filterId})` : "none",
          willChange: "filter, transform",
        }}
        animate={
          isCompleted
            ? {
                scale: [1, 1.05, 1],
                transition: { duration: 0.35, ease: "easeOut" },
              }
            : {}
        }
        className="inline-block transform-gpu"
        aria-hidden="true"
      >
        {formattedNumber()}
      </motion.span>

      {/* Suffix (e.g. "+" or "%") */}
      {suffix && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: isCompleted ? [1, 1.15, 1] : 1,
                  transition: { duration: 0.3 },
                }
              : { opacity: 0 }
          }
          className={`inline-block ml-0.5 font-bold ${suffixClassName}`}
        >
          {suffix}
        </motion.span>
      )}
    </span>
  );
}
