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
          backgroundColor='#2059C5'
          discountPrice={`${!active ? '72 BYN' : '92 BYN'}`}
          realPrice={`${!active ? '84 BYN' : '104 BYN'}`}
          includedOption={oneRoomPrice}
        />
        <RoomCard
          title="Двухкомнатная квартира"
          discountPrice={`${!active ? '96 BYN' : '130 BYN'}`}
          backgroundColor='#1A61E7'
          realPrice={`${!active ? '110 BYN' : '130 BYN'}`}
          includedOption={twoRoomPrice}
        />
        <RoomCard
          title="Трехкомнатная квартира"
          discountPrice={`${!active ? '120 BYN' : '170 BYN'}`}
          backgroundColor='#0A5FFE'
          realPrice={`${!active ? '145 BYN' : '165 BYN'}`}
          includedOption={threeRoomPrice}
        />
      </div>
    </div>
  );
};

export default PricingByRoom;
