import React, { forwardRef, useState, useEffect } from 'react';
import { Typography } from 'src/components/typography';

import styles from './Item.module.scss';

export interface TypographyProps {
  number: number;
  units: string;
  text: string;
}

interface AnimatedNumberProps {
  endNumber: number;
}

const change = (t: number) => 1 - Math.pow(t - 1, 2);

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ endNumber }) => {
  const [currentNumber, setCurrentNumber] = useState<number>(0);

  useEffect(() => {
    const duration = 3000;
    const start = performance.now();

    const animate = (time: number) => {
      const timeElapsed = time - start;
      const progress = Math.min(timeElapsed / duration, 1);

      const easedProgress = change(progress);
      const newNumber = Math.floor(easedProgress * endNumber);
      setCurrentNumber(newNumber);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      setCurrentNumber(0);
    };
  }, [endNumber]);

  return <>{currentNumber}</>;
};

export const Item = forwardRef<HTMLDivElement, TypographyProps>(({ number, units, text }, ref) => {
  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.top}>
        <div style={{ '--width': number.toString().length + 1.3 }}>
        <Typography variant={'xxl-semibold'} color={'blue'} className={styles.dynamicWidth}>
          <AnimatedNumber endNumber={number} />+
        </Typography>
        </div>
        <Typography variant={'l-semibold'} color={'blue'} className={styles.units}>
          {units}
        </Typography>
      </div>
      <Typography variant={'xxs-regular'} color={'dark'} className={styles.text}>
        {text}
      </Typography>
    </div>
  );
});