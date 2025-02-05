import { forwardRef } from 'react';
import { Typography } from 'src/components/typography';

import styles from './Item.module.scss';

export interface TypographyProps {
  number: number;
  units: string;
  text: string;
}

export const Item = forwardRef<HTMLDivElement, TypographyProps>(({ number, units, text }, ref) => {
  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.top}>
        <Typography variant={'xxl-semibold'} color={'blue'} children={number + '+'} />
        <Typography variant={'l-semibold'} color={'blue'} children={units} className={styles.units} />
      </div>

      <Typography variant={'xs-regular'} color={'dark'} children={text} className={styles.text} />
    </div>
  );
});
