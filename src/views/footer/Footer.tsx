import { Typography } from '../../components/typography';
import { Icon } from '../header/Icon';
import { iconData } from '../../data/icons';
import Logo from '../../assets/logo.png';

import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={style.footerWrapper}>
      <div className={style.footerWrapper_icon}>
        <Icon src={Logo} key="logo" alt="Logo" className={style.logo} />
        <Typography variant="h3" className={style.logoText}>
          dolphinservice.by
        </Typography>
      </div>
      <div className={style.footerWrapper_social}>
        {iconData.map(icon => (
          <div className={style.iconRow}>
            <Icon key={icon.src} className={style.socialItem} src={icon.src} alt={icon.alt} href={icon.href} />
          </div>
        ))}
      </div>
      <div className={style.footerWrapper_numberWrapper}>
        <Typography className={style.number} children={'+375 29 181 5595'} variant="regular" />
      </div>
    </div>
  );
};
