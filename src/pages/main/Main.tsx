import { Typography } from '../../components/typography';
import AddCountForm from '../../views/addCountForm/AddCountForm';
import { Icon } from '../../views/header/Icon';
import Clock from '../../assets/Group 70.png';
import Clean from '../../assets/Group 69.png';
import Logo from '../../assets/full-logo-CveyffvM 3.svg'

import style from './Main.module.scss';

export const Main = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_roomCount}>
        <Typography className={style.wrapper_title} variant="h1">
          Профессиональный <br />
          <span className={style.color}>клининг</span> жилых помещений
        </Typography>
        <Typography className={style.wrapper_discount} variant="medium">
          Рассчитайте стоимость своей уборки <br /> и получите скидку 15% на первый заказ
        </Typography>
        <AddCountForm />
      </div>
      <div className={style.wrapper_pic}>
        <div className={style.wrapper_pic_icon}>
          <Icon src={Clock} key="clock" alt="Clock" className={style.logo} />
        </div>
        <div className={style.wrapper_pic_icon}>
          <Icon src={Clean} key="clean" alt="Clean" className={style.logo} />
        </div>
				<div className={style.wrapper_pic_icon}>
          <Icon src={Logo} key="logo" alt="Logo" className={style.logo} />
        </div>
      </div>
    </div>
  );
};
