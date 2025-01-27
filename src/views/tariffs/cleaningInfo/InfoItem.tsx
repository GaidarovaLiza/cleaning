import { forwardRef, ReactNode, useEffect, useRef, useState } from 'react';
import { Typography } from 'src/components/typography';

import styles from './InfoItem.module.scss';

export interface TypographyProps {
  title: string | ReactNode;
  text: string;
}

export const InfoItem = forwardRef<HTMLDivElement, TypographyProps>(({ title, text }, ref) => {
  const [highlighted, setIsActive] = useState(false);
  const itemRef = useRef<HTMLDivElement | null>(null);

  const checkVisibility = () => {
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      const isVisible = rect.top >= 0.5 * window.innerHeight && rect.top <= 0.7 * window.innerHeight;
      setIsActive(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div ref={itemRef} className={`${styles.container} ${highlighted ? styles.highlighted : ''}`}>
      <Typography ref={ref} variant={'h3'} children={title} className={styles.container_title} />
      <Typography ref={ref} variant={'medium'} children={text} className={styles.container_text} />
    </div>
  );
});
