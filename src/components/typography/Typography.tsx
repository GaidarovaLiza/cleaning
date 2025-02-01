import { forwardRef, ReactNode } from 'react';

import styles from './Typography.module.scss';
import 'src/data/css-variables.scss';

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
    | 'h3'
    | 'h1'
    | 'h2' // --------------
    | 'regular_xs'
    | 'regular_s'
    | 'regular'
    | 'medium_xs'
    | 'medium_s'
    | 'medium'
    | 'semiBold_s'
    | 'semiBold';
}

export const Typography = forwardRef<HTMLDivElement, TypographyProps>(
  ({ children, onClick, className, isCursorPointer, color = 'dark', variant }, ref) => {
    return (
      <>
        {variant === 'h1' && (
          <h1
            onClick={onClick}
            className={`${isCursorPointer ? styles.cursor : ''} ${styles.h1} ${className || ''} ${styles[color]}`}
            ref={ref}
          >
            {children}
          </h1>
        )}
        {variant === 'h3' && (
          <h3
            onClick={onClick}
            className={`${isCursorPointer ? styles.cursor : ''} ${styles.h3} ${className || ''} ${styles[color]}`}
            ref={ref}
          >
            {children}
          </h3>
        )}
        {variant !== 'h1' && (
          <p
            onClick={onClick}
            style={{ color: `${color}`}}
            className={`${styles[variant]} ${className || ''} ${styles[color]}`}
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
