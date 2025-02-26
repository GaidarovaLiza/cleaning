import { forwardRef, ReactNode } from 'react';
import { Typography } from 'src/components/typography';

import styles from './InfoItem.module.scss';

export interface TypographyProps {
  title: string | ReactNode;
  text: string;
}

export const InfoItem = forwardRef<HTMLDivElement, TypographyProps>(({ title, text }, ref) => {
  return (
    <div className={styles.container}>
      <Typography ref={ref} variant={'l-semibold'} children={title} className={styles.container_title} />
      <Typography ref={ref} variant={'xs-regular'} children={text} className={styles.container_text} />
    </div>
  );
});
