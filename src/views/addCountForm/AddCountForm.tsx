import { useNavigate } from 'react-router-dom';

import { useRoomCountStore } from '../../store/store';
import { IncDecButton } from '../../components/increseDecreseButton';
import { Typography } from '../../components/typography';
import { declineBathroom, declineRoom } from '../../utils/declineUtils';
import { DefaultButton } from '../../components/defaultButton';

import styles from './AddCountForm.module.scss';

const AddCountForm = () => {
  const { roomCount, setRoomCount, bathRoomCount, setBathRoomCount, calculateMaintenancePrice } = useRoomCountStore();

  const navigate = useNavigate();

  const increaseRoomCount = () => {
    setRoomCount(roomCount + 1);
  };

  const decreaseRoomCount = () => {
    roomCount === 1 ? setRoomCount(1) : setRoomCount(roomCount - 1);
  };

  const increaseBathRoomCount = () => {
    setBathRoomCount(bathRoomCount + 1);
  };

  const decreaseBathRoomCount = () => {
    bathRoomCount === 1 ? setBathRoomCount(1) : setBathRoomCount(bathRoomCount - 1);
  };

  const handleCalculate = () => {
    calculateMaintenancePrice();
    navigate('/send-form');
  };

  return (
    <form className={styles.form}>
      <div className={styles.form_incDec}>
        <div className={styles.form_content}>
          <IncDecButton onClick={decreaseRoomCount} content="-" />
          <div className={styles.form_text}>
            <Typography className={styles.form_typographyText} children={roomCount} variant={'h2'} />
            <Typography children={declineRoom(roomCount)} variant={'h2'} />
          </div>
          <IncDecButton onClick={increaseRoomCount} content="+" />
        </div>
        <div className={styles.form_content}>
          <IncDecButton onClick={decreaseBathRoomCount} content="-" />
          <div className={styles.form_text}>
            <Typography className={styles.form_typographyText} children={bathRoomCount} variant={'h2'} />
            <Typography children={declineBathroom(bathRoomCount)} variant={'h2'} />
          </div>
          <IncDecButton onClick={increaseBathRoomCount} content="+" />
        </div>
      </div>
      <DefaultButton
        className={styles.form_button}
        text="Рассчитать стоимость"
        variant="fulfilled"
        onClick={handleCalculate}
        size="huge"
      />
    </form>
  );
};

export default AddCountForm;
