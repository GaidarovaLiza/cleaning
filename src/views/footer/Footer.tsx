import Logo from 'src/assets/logo.png';
import { Icon } from '../header/Icon';
import { Typography } from 'src/components/typography';
import { iconData } from 'src/data/icons';

import styles from './Footer.module.scss';


export const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerWrapper_icon}>
        <Icon src={Logo} key="logo" alt="Logo" className={styles.logo} />
        <Typography variant="h3" className={styles.logoText}>
          dolphinservice.by
        </Typography>
      </div>
      <div className={styles.footerWrapper_social}>
        {iconData.map(icon => (
          <div key={icon.src} className={styles.iconRow}>
            <Icon className={styles.socialItem} src={icon.src} alt={icon.alt} href={icon.href} />
          </div>
        ))}
      </div>
      <div className={styles.footerWrapper_numberWrapper}>
        <Typography className={styles.number} children={'+375 29 181 5595'} variant="regular" />
      </div>
    </div>
  );
};
