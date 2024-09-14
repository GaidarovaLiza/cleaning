import { ReactNode, useCallback, useMemo } from 'react';
import style from '';

export type ButtonProps = {
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  isBorder?: boolean;
  loading?: boolean;
  onClick: () => void;
  size?: 'small' | 'medium' | 'huge';
  text?: string;
  variant: 'fulfilled' | 'outlined' | 'withOutBorder';
};

export const DefaultButton = ({
  className,
  disabled = false,
  icon,
  isBorder = true,
  loading = false,
  onClick,
  size = 'medium',
  text,
  variant = 'fulfilled',
}: ButtonProps) => {
  const sizeStyles = useMemo(() => {
    switch (size) {
      case 'small':
        return {
          height: '40px',
          padding: !icon ? '16px 20px' : '15px 15px 15px 10px',
        };
      case 'medium':
        return {
          height: '55px',
          padding: !icon ? '18.5px 20px' : '18.5px 15px 18.5px 10px',
        };
      case 'huge':
        return {
          height: '60px',
          padding: `25px ${icon ? '25px' : '30px'} 25px ${icon ? '25px' : '30px'}`,
        };
    }
  }, [icon, size]);

  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = useCallback(e => {
    e.preventDefault();
    onClick();
  }, []);

  return (
    <>
      {variant === 'fulfilled' && (
        <button
          className={`${style.button} ${style.buttonFulfilled} ${className || ''}`}
          disabled={disabled || loading}
          onClick={onClickHandler}
          style={{ ...sizeStyles }}
        >
          {text && text}
          {icon && icon}
        </button>
      )}
      {variant === 'outlined' && (
        <button
          className={`${style.button} ${style.buttonOutlined} ${className || ''}`}
          data-is-border={isBorder}
          disabled={disabled || loading}
          onClick={onClickHandler}
          style={{ ...sizeStyles }}
        >
          {text && text}
          {icon && icon}
        </button>
      )}
      {variant === 'withOutBorder' && (
        <button
          className={`${style.button} ${style.withOutBorder} ${className || ''}`}
          disabled={disabled || loading}
          onClick={onClickHandler}
        >
          {text}
        </button>
      )}
    </>
  );
};
