import { InfoItem } from './InfoItem.tsx';
import { Typography } from '../../../components/typography';

import styles from './CleaningInfo.module.scss';

export const CleaningInfo = () => {
  const info = [
    {
      id: 1,
      title: (
        <>
          Соберите свою идеальную
          <br />
          уборку самостоятельно
        </>
      ),
      text: 'Выберите только те услуги, которые вам нужны и составьте индивидуальный пакет услуг',
    },
    {
      id: 2,
      title: 'Доверьтесь профессионалам с качественными средствами для уборки',
      text: 'У нас работают опытные клинеры, которые знают свое дело и пользуются безопасными средствами (класс Е7)',
    },
    {
      id: 3,
      title: 'Комфортные цены с индивидуальными условиями',
      text: 'Мы предлагаем доступные цены на все виды услуг, чтобы клининг был доступен каждому',
    },
    {
      id: 4,
      title: (
        <>
          Готовы к работе в день <br /> оформления уборки
        </>
      ),
      text: 'Мы идем навстречу и если нужна уборка «день в день», то сделаем все возможное, чтобы ее выполнить',
    },
  ];

  return (
    <div>
      <Typography variant={'h1'} className={styles.title}>
        Забота о вашем доме <br /> с клинингом <span className={styles.color}>Дельфин</span>
      </Typography>
      <div className={styles.cleaningInfo}>
        {info.map(item => (
          <InfoItem key={item.id} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};
