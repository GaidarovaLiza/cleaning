import { useContext } from 'react';

import styles from './AboutUs.module.scss';
import { ScrollContext } from 'src/context';
import { Typography } from 'src/components/typography';
import { Icon } from 'src/views/header/Icon';
import Arrow from 'src/assets/arrow.svg'
import { DefaultButton } from 'src/components/defaultButton';


export const AboutUs = () => {
  const { aboutUsInfoRef } = useContext(ScrollContext)!;

  return (
    <div className={styles.cleaningInfo} ref={aboutUsInfoRef}>
      <Typography className={styles.cleaningInfo_text} variant='medium'> <span className={styles.color}>Рассчитайте</span> стоимость клининга, исходя из <br/> количества комнат, санузлов и <br/> дополнительных услуг при необходимости</Typography>
			<Icon className={styles.cleaningInfo_arrow} src={Arrow} alt='arrow'/>
			<DefaultButton className={styles.cleaningInfo_button} onClick={()=> {}} variant='fulfilled' text='РАССЧИТАТЬ'/>
    </div>
  );
};
