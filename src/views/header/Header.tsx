import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Drawer, IconButton, Link, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Icon } from './Icon/Icon';
import loonIcon from '../../assets/telegram_3536661.png';
import viberIcon from '../../assets/viber_3955062.png';
import whatsApp from '../../assets/whatsapp_3536445.png';
import logo from '../../assets/full-logo.png';
import { MobileContent } from './mobileContent/MobileContent';
import { ScrollContext } from '../../context';
import { Typography } from '../../components/typography';

import style from './Header.module.scss';
import { scrollToAboutUs, scrollToCleaningInfo } from '../../utils/scrollUtils';

export const iconData = [
  {
    src: loonIcon,
    href: 'https://t.me/dolphin_service',
    alt: 'telegram',
  },
  {
    src: viberIcon,
    href: 'https://viber.com/dolphin_service',
    alt: 'viber',
  },
  {
    src: whatsApp,
    href: 'https://whatsapp.com/dolphin_service',
    alt: 'whatsApp',
  },
];

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { aboutUsInfoRef, cliningInfoRef } = useContext(ScrollContext)!;
  const navigate = useNavigate();

  const goToMainPageHandler = () => {
    navigate('/');
  };

  const scrollToCleaningInfoHandler = () => {
    setOpenDrawer(false);
    scrollToCleaningInfo(cliningInfoRef, navigate);
  };

  const scrollToAboutUsHandler = () => {
    setOpenDrawer(false);
    scrollToAboutUs(aboutUsInfoRef, navigate);
  };

  return (
    <>
      <AppBar position="static">
        <Drawer anchor="right" variant="temporary" open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <Box>
            <Paper
              sx={{
                boxShadow: 'none',
                width: '330px',
              }}
              className={style.paper}
            >
              <MobileContent
                scrollToCleaningInfo={scrollToCleaningInfoHandler}
                scrollToAboutUs={scrollToAboutUsHandler}
              />
            </Paper>
          </Box>
        </Drawer>
      </AppBar>
      <div className={style.wrapper}>
        <div className={`${style.container} ${openDrawer ? style.openDrawer : ''}`}>
          <div className={style.logo}>
            {openDrawer ? (
              <div key="mobileContent" className={style.mobileContent}></div>
            ) : (
              <div onClick={goToMainPageHandler}>
                <Icon key="logo" className={style.logoImg} src={logo} alt={'Logo'} />
              </div>
            )}
          </div>
          <div className={style.iconContainer}>
            <IconButton
              edge="start"
              className={openDrawer ? style.hideMenu : ''}
              color="default"
              aria-label="open drawer"
              onClick={() => setOpenDrawer(!openDrawer)}
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Link style={{ textDecoration: 'none' }}>
              <Typography className={style.number} children={'+375 29 181 5595'} variant="h3" />
            </Link>
            <div className={style.iconRow}>
              {iconData.map(icon => (
                <Icon key={icon.src} className={style.mobileContent} src={icon.src} alt={icon.alt} href={icon.href} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
