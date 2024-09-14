import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DefaultButton } from 'components/defaultButton';
import { Typography } from 'components/typography/Typography';
import {
  useCalendarStore,
  useFormBodyStore,
  useRoomCountStore,
  loadFromLocalStorage,
  useAdditionalItemsStore,
} from 'store/store';
import { declineChosenRoom, declineChosenBathroom } from 'utils/utils';
import { Modal } from 'components/modal/Modal';
import { Input } from 'components/Input';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Alert from '@mui/material/Alert';
import { ClickAwayListener, Tooltip } from '@mui/material';
import emailjs from '@emailjs/browser';

import style from './FinalPrice.module.scss';

export const FinalPrice = () => {
  const { maintenancePrice, roomCount, bathRoomCount, calculateMaintenancePrice } = useRoomCountStore();
  const { phone, name, setName, setPhone } = useFormBodyStore();
  const { additionalItemsList } = useAdditionalItemsStore();
  const { selectedDate } = useCalendarStore();

  const isDesktop = useMediaQuery({ minWidth: 1000 });

  const [open, setOpen] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const nameRef = useRef(name);
  const phoneRef = useRef(phone);
  const form = useRef();

  const buttonText = isDesktop ? 'Заказать' : `Заказать за ${maintenancePrice} BYN`;

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  useEffect(() => {
    nameRef.current = name;
    phoneRef.current = phone;
  }, [name, phone]);

  useEffect(() => {
    loadFromLocalStorage();
    calculateMaintenancePrice();
  }, []);

  const handleSendUserData = () => {
    emailjs
      .sendForm('service_233ymmh', 'template_x00wonb', form.current, {
        publicKey: 't7K2Fg96vesQITtfN',
      })
      .then(
        () => {
          localStorage.removeItem('additionalItemsList');
          setShowSuccessAlert(true);
        },
        error => {
          setShowErrorAlert(true);
        }
      );
  };

  const body = {
    name: nameRef.current,
    date: selectedDate.format('DD/MM/YYYY'),
    roomCount: roomCount,
    bathRoomCount: bathRoomCount,
    finalPrice: maintenancePrice,
    additionalItems: additionalItemsList,
  };

  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_textInfo}>
        <Typography variant="h2">
          {`Вы выбрали уборку ${roomCount} ${declineChosenRoom(roomCount)}, ${bathRoomCount} ${declineChosenBathroom(bathRoomCount)}, кухни и коридора`}
        </Typography>
      </div>
      <div className={style.wrapper_info}>
        <Typography className={style.wrapper_typography} variant="medium_s">
          Что входит в уборку квартиры
        </Typography>
        <ClickAwayListener onClickAway={() => setShowTooltip(false)}>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={() => setShowTooltip(false)}
            open={showTooltip}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="Влажная уборка всех поверхностей"
            classes={{
              tooltip: style.tooltip,
            }}
          >
            <HelpOutlineIcon color="primary" onClick={() => setShowTooltip(true)} />
          </Tooltip>
        </ClickAwayListener>
      </div>

      <Typography className={style.wrapper_payText} variant="h3">{`К оплате: ${maintenancePrice} рублей`}</Typography>
      <DefaultButton
        className={style.wrapper_button}
        onClick={() => setOpen(true)}
        size="huge"
        variant="fulfilled"
        text={buttonText}
      />
      <Modal
        buttons={<DefaultButton variant="fulfilled" text="Отправить" onClick={handleSendUserData} />}
        subtitle=" Мы свяжемся с Вами в течении 15 минут для подтверждения заказа"
        open={open}
        header="Заполните форму для обратной связи:"
        onClose={() => setOpen(false)}
      >
        <form className={style.wrapper_modalWrapper} ref={form}>
          <Input name="from_name" variant="filled" label="Ваше имя:" value={name} onChange={handleNameChange} />
          <Input
            name="from_phone"
            variant="filled"
            label="Номер телефона:"
            value={phone}
            onChange={handlePhoneChange}
          />
          <input type="hidden" name="message" value={JSON.stringify(body)} />
        </form>
        {showSuccessAlert && <Alert severity="success">Заяка успешно отправленна</Alert>}
        {showErrorAlert && <Alert severity="error">Ошибка в отправке данных</Alert>}
      </Modal>
    </div>
  );
};
