import { useContext } from 'react';
import { Grid, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { ScrollContext } from 'src/context';
import { Typography } from 'src/components/typography';

import styles from './AboutUs.module.scss';


export const AboutUs = () => {
  const { aboutUsInfoRef } = useContext(ScrollContext)!;

  return (
    <div className={styles.cleaningInfo} ref={aboutUsInfoRef}>
      <Grid item xs={12} md={6} style={{ borderTop: 'none' }}>
        <Typography className={styles.titleColor} variant="h2">
          Почему стоит выбрать именно нас?
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h3">
          Мы - клининговая компания, которая заботится о вашем комфорте и предлагает индивидуальный подход к каждому
          клиенту. У нас вы можете:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText
              primary="Собрать свою идеальную уборку: Выберите только те дополнительные услуги, которые вам действительно
            необходимы, и составьте индивидуальный пакет услуг."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText
              primary="Доверьтесь профессионалам: В нашей команде работают опытные и доброжелательные клинеры, которые знают свое
            дело и всегда готовы выполнить уборку качественно и оперативно."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText primary=" Приятные цены: Мы предлагаем доступные цены на все виды услуг, чтобы клининг был доступен каждому." />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText
              primary="Индивидуальный подход: Мы всегда готовы учесть ваши пожелания и особенности вашего дома, чтобы уборка была
             максимально удобной и эффективной."
            />
          </ListItem>
        </List>
      </Grid>
      <Typography variant="h3">Доверьте заботу о чистоте и комфорте вашего дома профессионалам!</Typography>
    </div>
  );
};
