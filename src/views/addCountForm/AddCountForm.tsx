import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

import { useRoomCountStore } from '../../store/store';
import { IncDecButton } from '../../components/increseDecreseButton';
import { Typography } from '../../components/typography';
import { declineBathroom, declineRoom } from '../../utils/utils';
import { DefaultButton } from '../../components/defaultButton';

import style from './AddCountForm.module.scss';

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
    <form className={style.form}>
      <div className={style.form_content}>
        <IncDecButton onClick={decreaseRoomCount} content="-" />
        <div className={style.form_text}>
          <Typography className={style.form_typographyText} children={roomCount} variant={'h2'} />
          <Typography children={declineRoom(roomCount)} variant={'h2'} />
        </div>
        <IncDecButton onClick={increaseRoomCount} content="+" />
      </div>
      <div className={style.form_content}>
        <IncDecButton onClick={decreaseBathRoomCount} content="-" />
        <div className={style.form_text}>
          <Typography className={style.form_typographyText} children={bathRoomCount} variant={'h2'} />
          <Typography children={declineBathroom(bathRoomCount)} variant={'h2'} />
        </div>
        <IncDecButton onClick={increaseBathRoomCount} content="+" />
      </div>
      <DefaultButton
        className={style.form_button}
        text="Рассчитать"
        variant="fulfilled"
        icon={<ArrowForwardIcon />}
        onClick={handleCalculate}
        size="huge"
      />
    </form>
  );
};

export default AddCountForm;
