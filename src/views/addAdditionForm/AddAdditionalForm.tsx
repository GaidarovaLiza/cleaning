import { Chips } from 'components/chips/Chips';
import { iconList } from 'data/additionals';

import style from './AddAdditionForm.module.scss';

export const AddAdditionsForm = () => {
  return (
    <div className={style.wrapper}>
      <Chips label={'Дополнительные услуги'} value={iconList} />
    </div>
  );
};
