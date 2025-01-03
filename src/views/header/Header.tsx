import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Drawer, IconButton, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Icon } from './Icon/Icon';

import logo from 'src/assets/full-logo.png';
import { ScrollContext } from 'src/context';
import { scrollToAboutUs, scrollToCleaningInfo } from 'src/utils/scrollUtils';
import { MobileContent } from './mobileContent';
import { Typography } from 'src/components/typography';
import { iconData } from 'src/data/icons';

import styles from './Header.module.scss';


const menuItems = [
  {
    title: 'О нас',
    callback: () => {},
  },
  {
    title: 'Преимущества',
    callback: () => {},
  },
  {
    title: 'Услуги',
    callback: () => {},
  },
  {
    title: 'FAQ',
    callback: () => {},
  },
];

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { aboutUsInfoRef, cleaningInfoRef } = useContext(ScrollContext) || {};
  const navigate = useNavigate();

  const goToMainPageHandler = () => {
    navigate('/');
  };

  const scrollToCleaningInfoHandler = () => {
    setOpenDrawer(false);
    scrollToCleaningInfo(cleaningInfoRef, navigate);
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
              className={styles.paper}
            >
              <MobileContent
                scrollToCleaningInfo={scrollToCleaningInfoHandler}
                scrollToAboutUs={scrollToAboutUsHandler}
              />
            </Paper>
          </Box>
        </Drawer>
      </AppBar>
      <div className={styles.wrapper}>
        <div className={`${styles.container} ${openDrawer ? styles.openDrawer : ''}`}>
          <div className={styles.logo}>
            {openDrawer ? (
              <div key="mobileContent" className={styles.mobileContent}></div>
            ) : (
              <div onClick={goToMainPageHandler}>
                <Icon key="logo" className={styles.logoImg} src={logo} alt={'Logo'} />
              </div>
            )}
          </div>
          {menuItems.map(menuItem => (
            <div key={menuItem.title} className={styles.wrapper_menuItem} onClick={menuItem.callback}>
              {menuItem.title}
            </div>
          ))}
          <div className={styles.iconContainer}>
            <IconButton
              edge="start"
              className={openDrawer ? styles.hideMenu : ''}
              color="default"
              aria-label="open drawer"
              onClick={() => setOpenDrawer(!openDrawer)}
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            <div className={styles.socialWrapper}>
              <Typography className={styles.number} children={'+375 29 181 5595'} variant="regular" />
              <div className={styles.iconRow}>
                {iconData.map(icon => (
                  <div  key={icon.src} className={styles.iconRow_iconWrapper}>
                    <Icon
                      key={icon.src}
                      className={styles.mobileContent}
                      src={icon.src}
                      alt={icon.alt}
                      href={icon.href}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
