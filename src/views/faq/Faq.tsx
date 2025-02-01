import { forwardRef } from 'react';
import { FaqItem } from './FaqItem.tsx';

import styles from './Faq.module.scss';

export const Faq = forwardRef<HTMLDivElement>(() => {
  const faq = [
    {
      id: 1,
      title: 'Есть ли у вас гарантия качества услуги?',
      text: 'Да, мы предоставляем гарантию качества на все проведенные работы. Если клиент не удовлетворен результатом, мы исправим все недочеты бесплатно.',
    },
    {
      id: 2,
      title: 'Какие методы и средства уборки используются при клининге?',
      text: 'Какой-то текст',
    },
    {
      id: 3,
      title: 'Как часто рекомендуется проводить клининг квартир?',
      text: 'Какой-то текст',
    },
  ];

  return (
    <div className={styles.container}>
      {faq.map(item => (
        <FaqItem title={item.title} text={item.text} key={item.id} />
      ))}
    </div>
  );
});
