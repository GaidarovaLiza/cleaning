import { forwardRef, ReactNode } from 'react';

import styles from './Typography.module.scss';

export interface TypographyProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  isCursorPointer?: boolean;
  color?: string;
  variant:
    | 'xxxs-regular'
    | 'xxs-regular'
    | 'xxs-medium'
    | 'xxs-semibold'
    | 'xxs-bold'
    | 'xs-regular'
    | 's-semibold'
    | 'm-semibold'
    | 'l-regular'
    | 'l-semibold'
    | 'xl-semibold'
    | 'xxl-semibold'
    | 'xxxl-semibold'
    | 'h1';
}

export const Typography = forwardRef<HTMLDivElement, TypographyProps>(
  ({ children, onClick, className, isCursorPointer, color, variant }, ref) => {
    return (
      <>
        {variant === 'h1' && (
          <h1
            onClick={onClick}
            style={{ color: color }}
            className={`${isCursorPointer ? styles.cursor : ''} ${styles.h1} ${className || ''} `}
            ref={ref}
          >
            {children}
          </h1>
        )}
        {variant !== 'h1' && (
          <p
            onClick={onClick}
            className={`${styles[variant]} ${className || ''} ${color ? styles[color] : ''}`}
            ref={ref}
          >
            {children}
          </p>
        )}
      </>
    );
  }
);

Typography.displayName = 'Typography';
