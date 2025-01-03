import { Calendar } from '../calendar/Calendar';
import { AdditionalItems } from '../tariffs/additionalItems';
import { FinalPrice } from './finalPrice';

import styles from './SendForm.module.scss';

const SendForm = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.wrapper_form}>
        <Calendar />
        <FinalPrice />
      </form>
      <AdditionalItems />
    </div>
  );
};

export default SendForm;
