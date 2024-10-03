import { Link } from '@mui/material';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import GroupIcon from '@mui/icons-material/Group';
import { Typography } from '../../components/typography';
import { iconData } from '../header/Header';
import { Icon } from '../header/Icon';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';

import style from './Footer.module.scss';
import { ScrollContext } from '../../context';
import { scrollToAboutUs, scrollToCleaningInfo } from '../../utils/scrollUtils';

export const Footer = () => {
  const { aboutUsInfoRef, cliningInfoRef } = useContext(ScrollContext)!;
  const navigate = useNavigate();

  const scrollToCleaningInfoHandler = () => {
    scrollToCleaningInfo(cliningInfoRef, navigate);
  };

  const scrollToAboutUsHandler = () => {
    scrollToAboutUs(aboutUsInfoRef, navigate);
  };

  return (
    <div className={style.footerWrapper}>
      <div className={style.footerWrapper_item}>
        <div className={style.logoWrapper}>
          <Icon src={Logo} key="logo" alt="Logo" className={style.logo} />
          <Typography variant="h3" className={style.logoText}>
            Dolphin_service.by
          </Typography>
        </div>
      </div>
      <div className={style.footerWrapper_item}>
        <Typography variant="medium">Наши контакты:</Typography>
        <Link style={{ textDecoration: 'none' }}>
          <Typography className={style.number} children={'+375 29 181 5595'} variant="h3" />
        </Link>
        <div className={style.icons}>
          {iconData.map(icon => (
            <Icon key={icon.src} className={style.mobileContent} src={icon.src} alt={icon.alt} href={icon.href} />
          ))}
        </div>
      </div>
      <div className={style.footerWrapper_item}>
        <Typography variant="medium">Информация:</Typography>
        <div>
          <Link className={style.link} style={{ textDecoration: 'none' }}>
            <CleaningServicesIcon color="inherit" />
            <Typography
              isCursorPointer={true}
              className={style.wrapper_padding}
              variant="h3"
              onClick={scrollToCleaningInfoHandler}
            >
              Зачем нужен клининг
            </Typography>
          </Link>
          <Link className={style.link} style={{ textDecoration: 'none' }}>
            <GroupIcon />
            <Typography
              isCursorPointer={true}
              onClick={scrollToAboutUsHandler}
              className={style.wrapper_padding}
              variant="h3"
            >
              О нас
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
};
