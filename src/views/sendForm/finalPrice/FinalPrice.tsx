        import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Alert from '@mui/material/Alert';
import { ClickAwayListener, Tooltip } from '@mui/material';
import emailjs from '@emailjs/browser';

import { loadFromLocalStorage, useAdditionalItemsStore, useCalendarStore, useFormBodyStore, useRoomCountStore } from 'src/store/store';
import { Typography } from 'src/components/typography';
import { declineChosenBathroom, declineChosenRoom } from 'src/utils/declineUtils';
import { DefaultButton } from 'src/components/defaultButton';
import { Modal } from 'src/components/modal/Modal';
import { Input } from 'src/views/sendForm/Input';

import styles from './FinalPrice.module.scss';

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
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);


  const nameRef = useRef(name);
  const phoneRef = useRef(phone);
  const form = useRef<HTMLFormElement>(null);

  const buttonText = isDesktop ? 'Заказать' : `Заказать за ${maintenancePrice} BYN`;

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setPhone(inputValue);

    if ((name.trim() !== '') && inputValue.length === 13) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };


  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.value;
    setName(event.target.value);
    if ((inputName.trim() !== '') && phone.length === 13) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
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
    if (form.current) {
      emailjs
        .sendForm('service_233ymmh', 'template_x00wonb', form.current, {
          publicKey: 't7K2Fg96vesQITtfN',
        })
        .then(
          () => {
            localStorage.removeItem('additionalItemsList');
            setShowSuccessAlert(true);
          },
          () => {
            setShowErrorAlert(true);
          }
        );
    } else {
      console.error('Форма не была найдена');
    }
  };

  const body = {
    name: nameRef.current,
    date: selectedDate?.format('DD/MM/YYYY'),
    roomCount: roomCount,
    bathRoomCount: bathRoomCount,
    finalPrice: maintenancePrice,
    additionalItems: additionalItemsList.filter(option => option.isAdded).map(item => item.text),
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_textInfo}>
        <Typography className={styles.wrapper_typography} variant="h2">
          {`Вы выбрали уборку ${roomCount} ${declineChosenRoom(roomCount)}, ${bathRoomCount} ${declineChosenBathroom(
            bathRoomCount
          )}, кухни и коридора`}
        </Typography>

        <div className={styles.wrapper_info}>
          <Typography className={styles.wrapper_typography} variant="medium_s">
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
              title="Влажная и сухая уборка всех поверхностей"
              classes={{
                tooltip: styles.tooltip,
              }}
            >
              <HelpOutlineIcon color="primary" onClick={() => setShowTooltip(true)} />
            </Tooltip>
          </ClickAwayListener>
        </div>
      </div>

      <Typography className={styles.wrapper_payText} variant="h3">{`К оплате: ${maintenancePrice} рублей`}</Typography>
      <DefaultButton
        className={styles.wrapper_button}
        onClick={() => setOpen(true)}
        size="huge"
        variant="fulfilled"
        text={buttonText}
      />
      <Modal
        buttons={<DefaultButton variant="fulfilled" text="Отправить" onClick={handleSendUserData} disabled={isButtonDisabled} />}
        subtitle=" Мы свяжемся с Вами в течении 15 минут для подтверждения заказа"
        open={open}
        header="Заполните форму для обратной связи:"
        onClose={() => setOpen(false)}
      >
        <form className={styles.wrapper_modalWrapper} ref={form}>
          <Input name="from_name" variant="filled" label="Ваше имя:" value={name} onChange={handleNameChange} />
          <Input
            name="from_phone"
            variant="filled"
            label="Номер телефона:"
            validate={true}
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
