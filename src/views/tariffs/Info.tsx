import { CleaningInfo } from './cleaningInfo/CleaningInfo.tsx';

import style from './Info.module.scss';
import { AboutUs } from './maintenanceCleaning';

export const Info = () => {
  return (
    <div className={style.wrapper}>
      <CleaningInfo />
      <AboutUs />
    </div>
  );
};
