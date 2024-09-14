import { forwardRef, ReactNode } from 'react';

import styles from './Typography.module.scss';

export interface TypographyProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  isCursorPointer?: boolean;
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
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
  ({ children, onClick, className, isCursorPointer, variant }, ref) => {
    return (
      <>
        {variant === 'h1' && (
          <h1
            onClick={onClick}
            className={`${isCursorPointer ? styles.cursor : ''} ${styles.h1} ${className || ''}`}
            ref={ref}
          >
            {children}
          </h1>
        )}
        {variant === 'h2' && (
          <h2
            onClick={onClick}
            className={`${isCursorPointer ? styles.cursor : ''} ${styles.h2} ${className || ''}`}
            ref={ref}
          >
            {children}
          </h2>
        )}
        {variant === 'h3' && (
          <h3
            onClick={onClick}
            className={`${isCursorPointer ? styles.cursor : ''} ${styles.h3} ${className || ''}`}
            ref={ref}
          >
            {children}
          </h3>
        )}
        {variant !== 'h1' && variant !== 'h2' && variant !== 'h3' && (
          <p onClick={onClick} className={`${styles[variant]} ${className || ''}`} ref={ref}>
            {children}
          </p>
        )}
      </>
    );
  }
);

Typography.displayName = 'Typography';
