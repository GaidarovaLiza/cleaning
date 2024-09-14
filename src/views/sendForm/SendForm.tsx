import { Calendar } from '../calendar/Calendar';
import { AdditionalItems } from '../tariffs/additionalItems';
import { FinalPrice } from './finalPrice/FinalPrice';

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
