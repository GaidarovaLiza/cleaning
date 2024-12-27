import { Button } from '@mui/material';

import styles from './IncDecButton.module.scss';

type ButtonProps = {
  content: string;
  className?: string;
  onClick: () => void;
};

export const IncDecButton = ({ content, className, onClick }: ButtonProps) => {
  return (
    <Button
      sx={{
        borderRadius: '50%',
        minWidth: '30px',
        height: '30px',
        backgroundColor: '#2059c5',
        padding: '0',
      }}
      variant="contained"
      className={`${styles.button} ${className || ''}`}
      onClick={onClick}
    >
      <div className={styles.content}>{content}</div>
    </Button>
  );
};
