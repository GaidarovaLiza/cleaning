import { forwardRef, useState } from 'react';
import { Typography } from 'src/components/typography';
import Plus from  'src/assets/plus.svg';
import Minus from 'src/assets/minus.svg';

import styles from './FaqItem.module.scss';

export interface TypographyProps {
  title: string;
  text: string;
}

export const FaqItem = forwardRef<HTMLDivElement, TypographyProps>(({ title, text }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlus, setIsPlus] = useState(true);
  const [svgSrc, setSvgSrc] = useState(Plus);

  const toggleText = () => {
    setIsOpen(prev => !prev);
    setIsPlus(prev => !prev);
    setSvgSrc(isOpen ? Plus : Minus);
  };

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.titleContainer}>
        <Typography variant={'l-semibold'} children={title} className={styles.title} />
      </div>
      <div className={styles.buttonContainer}>
        <img onClick={toggleText} src={svgSrc} className={styles.button} />
      </div>
      <div className={`${styles.textContainer} ${!isPlus ? styles.expand : styles.collapse}`}>
        <Typography
          variant={'xs-regular'}
          children={text}
          className={`${styles.text} ${styles.textContainer} ${isOpen ? styles.expand : styles.collapse}`}
        />
      </div>
    </div>
  );
});
