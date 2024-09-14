import { useMemo } from 'react';
import { Button } from '@mui/material';

import styles from './IncDecButton.module.scss';

type ButtonProps = {
  content: string;
  size?: 'small' | 'medium' | 'huge';
  className?: string;
  onClick: () => void;
};

export const IncDecButton = ({ content, size = 'huge', className, onClick }: ButtonProps) => {
  const sizeStyles = useMemo(() => {
    switch (size) {
      case 'small':
        return {
          height: '40px',
          padding: '15px 15px 15px 10px',
          fontSize: '14px',
        };
      case 'medium':
        return {
          height: '45px',
          padding: '12.5px 15px 12.5px 10px',
          fontSize: '18px',
        };
      case 'huge':
        return {
          height: '50px',
          padding: '15px 32px 20px 32px',
          fontSize: '29px',
        };
    }
  }, [size]);

  return (
    <Button
      size="large"
      className={`${styles.button} ${className || ''}`}
      style={{ ...sizeStyles }}
      variant="text"
      onClick={onClick}
    >
      {content}
    </Button>
  );
};
