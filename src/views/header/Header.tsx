import { useState, useContext } from 'react';
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

export const iconData = [
  {
    src: loonIcon,
    href: 'https://t.me',
    alt: 'telegram',
  },
  {
    src: viberIcon,
    href: 'https://viber.com',
    alt: 'viber',
  },
  {
    src: whatsApp,
    href: 'https://whatsapp.com',
    alt: 'whatsApp',
  },
];

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { aboutUsInfoRef, cliningInfoRef } = useContext(ScrollContext)!;

  const scrollToAboutUs = () => {
    setOpenDrawer(false);
    aboutUsInfoRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCleaningInfo = () => {
    setOpenDrawer(false);
    cliningInfoRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar position="static">
        <Drawer anchor="right" variant="temporary" open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <Box>
            <Paper
              sx={{
                boxShadow: 'none',
              }}
              className={style.paper}
            >
              <MobileContent scrollToCleaningInfo={scrollToCleaningInfo} scrollToAboutUs={scrollToAboutUs} />
            </Paper>
          </Box>
        </Drawer>
      </AppBar>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.logo}>
            {openDrawer ? (
              <div key="mobileContent" className={style.mobileContent}></div>
            ) : (
              <Icon key="logo" className={style.logoImg} src={logo} alt={'Logo'} />
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
