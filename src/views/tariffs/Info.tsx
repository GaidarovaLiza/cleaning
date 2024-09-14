import { CliningInfo } from './cliningInfo/CliningInfo';

import style from './Info.module.scss';
import { AboutUs } from './maintenanceCleaning';

export const Info = () => {
  return (
    <div className={style.wrapper}>
      <CliningInfo />
      <AboutUs />
    </div>
  );
};
