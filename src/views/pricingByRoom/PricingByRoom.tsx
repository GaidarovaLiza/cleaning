import { useState } from 'react';
import { Switch } from './switch/Switch';
import { Typography } from 'src/components/typography';
import RoomCard from './roomCard/RoomCard';

import style from './PricingByRoom.module.scss';

const PricingByRoom = () => {
  const [active, setActive] = useState<boolean>();
  return (
    <div className={style.blockWrapper}>
      <Typography variant="h1">
        <span className={style.color}> Стоимость услуг</span> в зависимости <br /> от количества комнат
      </Typography>
      <div className={style.blockWrapper_textWrapper}>
        <Typography variant="kgkgk">Поддерживающая уборка</Typography>
        <Switch value={active} onChange={() => setActive(!active)} />
        <Typography variant="h3">Генеральная уборка</Typography>
      </div>
      <div className={style.blockWrapper_cards}>
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </div>
    </div>
  );
};

export default PricingByRoom;
