import { Calendar } from 'views/calendar/Calendar';
import { FinalPrice } from './finalPrice/FinalPrice';
import { AdditionalItems } from 'views/tariffs/additionalItems';

import style from './SendForm.module.scss';

const SendForm = () => {
  return (
    <div className={style.wrapper}>
      <form className={style.wrapper_form}>
        <Calendar />
        <FinalPrice />
      </form>
      <AdditionalItems />
    </div>
  );
};

export default SendForm;
