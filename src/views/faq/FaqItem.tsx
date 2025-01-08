import { forwardRef, useState } from 'react';
import { Typography } from 'src/components/typography';

import styles from './FaqItem.module.scss';

export interface TypographyProps {
  title: string;
  text: string;
}

export const FaqItem = forwardRef<HTMLDivElement, TypographyProps>(({ title, text }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlus, setIsPlus] = useState(true);

  const toggleText = () => {
    setIsOpen(prev => !prev);
    setIsPlus(prev => !prev);
  };

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.titleContainer}>
        <Typography variant={'h3'} children={title} className={styles.title} />
      </div>
      <div className={styles.buttonContainer}>
        <img
          onClick={toggleText}
          src={isPlus ? 'src/assets/plus.svg' : 'src/assets/minus.svg'}
          className={styles.button}
        />
      </div>
      <div className={`${styles.textContainer} ${!isPlus ? styles.expand : styles.collapse}`}>
        <Typography
          variant={'medium'}
          children={text}
          className={`${styles.text} ${styles.textContainer} ${isOpen ? styles.expand : styles.collapse}`}
        />
      </div>
    </div>
  );
});
