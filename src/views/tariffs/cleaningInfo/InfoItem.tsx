import { forwardRef } from 'react';
import { Typography } from '../../../components/typography';
import styles from './InfoItem.module.scss';

export interface TypographyProps {
  title: string;
  text: string;
}

export const InfoItem = forwardRef<HTMLDivElement, TypographyProps>(({ title, text }) => {
  return (
    <div className={styles.container}>
      <Typography variant={'h3'} children={title} className={styles.container_title} />
      <Typography variant={'medium'} children={text} className={styles.container_text} />
    </div>
  );
});
