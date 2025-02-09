import { useState } from 'react';
import { Switch } from './switch/Switch';
import { Typography } from 'src/components/typography';
import RoomCard from './roomCard/RoomCard';
import { oneRoomPrice, threeRoomPrice, twoRoomPrice } from 'src/data/roomPricingOption';

import style from './PricingByRoom.module.scss';

const PricingByRoom = () => {
  const [active, setActive] = useState<boolean>();
  return (
    <div className={style.blockWrapper}>
      <Typography variant="xxxl-semibold">
        <span className={style.color}> Стоимость услуг</span> в зависимости <br /> от количества комнат
      </Typography>
      <div className={style.blockWrapper_textWrapper}>
        <Typography variant="l-regular" className={`${!active ? style.bold : ''}`}>
          Поддерживающая уборка
        </Typography>
        <Switch value={active} onChange={() => setActive(!active)} />
        <Typography variant="l-regular" className={`${active ? style.bold : ''}`}>
          Генеральная уборка
        </Typography>
      </div>
      <div className={style.blockWrapper_cards}>
        <RoomCard
          title="Однокомнатная квартира"
          discontPrice="72 BYN"
          realPrice="84 BYN"
          includedOption={oneRoomPrice}
        />
        <RoomCard
          title="Двухкомнатная квартира"
          discontPrice="96 BYN"
          realPrice="110 BYN"
          includedOption={twoRoomPrice}
        />
        <RoomCard
          title="Трехкомнатная квартира"
          discontPrice="120 BYN"
          realPrice="145 BYN"
          includedOption={threeRoomPrice}
        />
      </div>
    </div>
  );
};

export default PricingByRoom;
