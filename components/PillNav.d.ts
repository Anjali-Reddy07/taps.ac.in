import React from 'react';

export interface PillNavItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  ariaLabel?: string;
}

export interface PillNavProps {
  items?: PillNavItem[];
  logo?: string | React.ReactNode;
  logoAlt?: string;
  logoHref?: string;
  activeHref?: string;
  defaultActiveIndex?: number;
  onItemClick?: (item: PillNavItem, index: number, event: React.MouseEvent) => void;
  linkComponent?: React.ElementType;
  theme?: 'dark' | 'light';
  layout?: 'split' | 'joined';
  itemStyle?: 'pill' | 'plain';
  hoverEffect?: 'fill' | 'glide' | 'none';
  indicator?: 'dot' | 'pill' | 'none';
  surface?: 'glass' | 'solid' | 'none';
  size?: 'sm' | 'md' | 'lg';
  highlightColor?: string;
  highlightTextColor?: string;
  barColor?: string;
  textColor?: string;
  bounce?: number;
  stretch?: number;
  intro?: boolean;
  collapse?: 'auto' | 'always' | 'never';
  onMenuToggle?: (isOpen: boolean) => void;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

declare const PillNav: React.FC<PillNavProps>;
export default PillNav;

