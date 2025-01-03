import { CleaningInfo } from './cleaningInfo/CleaningInfo.tsx';
import { AboutUs } from './maintenanceCleaning';

import styles from './Info.module.scss';

export const Info = () => {
  return (
    <div className={styles.wrapper}>
      <CleaningInfo />
      <AboutUs />
    </div>
  );
};
