import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRoomCountStore } from 'src/store/store';
import { ScrollContext } from 'src/context';
import { Typography } from 'src/components/typography';
import { Icon } from 'src/views/header/Icon';
import Arrow from 'src/assets/arrow.svg'
import ArrowBottom from 'src/assets/arrow_png.png'
import { DefaultButton } from 'src/components/defaultButton';

import styles from './CalculateBlock.module.scss';

export const CalculateBlock = () => {
  const { aboutUsInfoRef } = useContext(ScrollContext) || {};
		const {calculateMaintenancePrice } = useRoomCountStore();
	const [isMobile, setIsMobile] = useState(window.innerWidth < 550);

	const navigate = useNavigate();
	
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 550);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);

	const handleCalculate = () => {
		console.log('here')
    calculateMaintenancePrice();
    navigate('/send-form');
  };

  return (
    <div className={styles.cleaningInfo} ref={aboutUsInfoRef}>
			{isMobile ?  <Typography className={styles.cleaningInfo_text} variant='medium'> <span className={styles.color}>Рассчитайте</span> стоимость клининга, исходя из количества комнат, санузлов и дополнительных услуг при необходимости</Typography> 
			: <Typography className={styles.cleaningInfo_text} variant='medium'> <span className={styles.color}>Рассчитайте</span> стоимость клининга, исходя из <br/> количества комнат, санузлов и <br/> дополнительных услуг при необходимости</Typography>}
			{isMobile ? <Icon className={styles.cleaningInfo_arrow} src={ArrowBottom} alt='arrow_bottom'/> 
			: <Icon className={styles.cleaningInfo_arrow} src={Arrow} alt='arrow'/>}
			{isMobile ? <DefaultButton className={styles.cleaningInfo_button} onClick={handleCalculate} variant='fulfilled' text='РАССЧИТАТЬ СТОИМОСТЬ'/> 
			: <DefaultButton className={styles.cleaningInfo_button} onClick={handleCalculate} variant='fulfilled' text='РАССЧИТАТЬ'/>}
			
    </div>
  );
};
