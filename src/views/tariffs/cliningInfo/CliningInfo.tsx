import { useContext } from 'react';
import { Grid, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { CleaningServices, CheckCircle, CleanHands, DryCleaning } from '@mui/icons-material';
import { Typography } from '../../../components/typography';
import { ScrollContext } from '../../../context';

import style from './CliningInfo.module.scss';

export const CliningInfo = () => {
  const { cliningInfoRef } = useContext(ScrollContext)!;

  return (
    <div className={style.cliningInfo} ref={cliningInfoRef}>
      <Grid item xs={12} md={6}>
        <Typography className={style.titleColor} variant="h2">
          Клининг: забота о вашем доме и комфорте
        </Typography>
        <Typography variant="regular">
          Клининг – это комплекс профессиональных услуг по уборке жилых помещений, направленный на создание комфортной и
          чистой среды для жизни. Профессиональный клининг – это не просто уборка, это забота о вашем доме, вашем
          комфорте и вашем здоровье.
        </Typography>
        <Typography variant="regular">
          Клининговые компании предлагают широкий спектр услуг: от стандартной уборки до глубокой генеральной уборки,
          химчистки мебели и ковров, мойки окон, чистки фасадов и многое другое.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography className={style.titleColor} variant="h3">
          Преимущества клининга:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CleaningServices />
            </ListItemIcon>
            <ListItemText primary="Экономия времени и сил" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <DryCleaning />
            </ListItemIcon>
            <ListItemText primary="Качество и профессионализм" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <CleanHands />
            </ListItemIcon>
            <ListItemText primary="Использование профессиональных средств" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText primary="Гарантия результата" />
          </ListItem>
        </List>
      </Grid>
    </div>
  );
};
