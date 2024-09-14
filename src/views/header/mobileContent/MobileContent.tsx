import { Link } from '@mui/material';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { Typography } from '../../../components/typography';
import GroupIcon from '@mui/icons-material/Group';
import { iconData } from '../Header';
import { Icon } from '../Icon/Icon';

import style from './MobileContent.module.scss';

interface MobileContent {
  scrollToCleaningInfo: () => void;
  scrollToAboutUs: () => void;
}

export const MobileContent = ({ scrollToCleaningInfo, scrollToAboutUs }: MobileContent) => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_block}>
        <Typography variant="h2">Контактная информация:</Typography>
      </div>
      <Link style={{ textDecoration: 'none' }}>
        <Typography className={style.wrapper_padding} variant="h3">
          +375 29 181 5595
        </Typography>
      </Link>
      <div className={style.iconContainer}>
        {iconData.map(icon => (
          <Icon key={icon.alt} className={style.wrapper_mobileContent} src={icon.src} alt={icon.alt} href={icon.href} />
        ))}
      </div>
      <div className={style.wrapper_block}>
        <Typography variant="h2">Информация:</Typography>
      </div>
      <Link className={style.link} style={{ textDecoration: 'none' }}>
        <CleaningServicesIcon />
        <Typography
          isCursorPointer={true}
          className={style.wrapper_padding}
          variant="h3"
          onClick={scrollToCleaningInfo}
        >
          Зачем нужен клининг
        </Typography>
      </Link>
      <Link className={style.link} style={{ textDecoration: 'none' }}>
        <GroupIcon />
        <Typography isCursorPointer={true} onClick={scrollToAboutUs} className={style.wrapper_padding} variant="h3">
          О нас
        </Typography>
      </Link>
    </div>
  );
};
