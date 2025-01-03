import { Typography } from '../../components/typography';
import AddCountForm from '../../views/addCountForm/AddCountForm';
import { Icon } from '../../views/header/Icon';
import Clock from '../../assets/Group 70.png';
import Clean from '../../assets/Group 69.png';
import Logo from '../../assets/full-logo-CveyffvM 3.svg'

import styles from './Main.module.scss';

export const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_roomCount}>
        <Typography className={styles.wrapper_title} variant="h1">
          Профессиональный <br />
          <span className={styles.color}>клининг</span> жилых помещений
        </Typography>
        <Typography className={styles.wrapper_discount} variant="medium">
          Рассчитайте стоимость своей уборки <br /> и получите скидку 15% на первый заказ
        </Typography>
        <AddCountForm />
      </div>
      <div className={styles.wrapper_pic}>
        <div className={styles.wrapper_pic_icon}>
          <Icon src={Clock} key="clock" alt="Clock" className={styles.logo} />
        </div>
        <div className={styles.wrapper_pic_icon}>
          <Icon src={Clean} key="clean" alt="Clean" className={styles.logo} />
        </div>
				<div className={styles.wrapper_pic_icon}>
          <Icon src={Logo} key="logo" alt="Logo" className={styles.logo} />
        </div>
      </div>
    </div>
  );
};
