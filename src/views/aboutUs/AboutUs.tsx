import { forwardRef } from 'react';
import { Item } from './Item.tsx';

import styles from './AboutUs.module.scss';

export const AboutUs = forwardRef<HTMLDivElement>(() => {
  const itemsData = [
    {
      id: 1,
      number: 4000,
      units: 'м2',
      text: 'убрали за все время работы компании',
    },
    {
      id: 2,
      number: 21,
      units: 'клинера',
      text: 'убирают ваше пространство на постоянной основе',
    },
    {
      id: 3,
      number: 7,
      units: 'лет',
      text: 'работаем в Минске и убираем квартиры любой сложности',
    },
    {
      id: 4,
      number: 94,
      units: '',
      text: 'довольных клиентов советуют нас друзьям',
    },
  ];

  return (
    <div className={styles.container}>
      {itemsData.map(item => (
        <Item number={item.number} units={item.units} text={item.text} key={item.id} />
      ))}
    </div>
  );
});
