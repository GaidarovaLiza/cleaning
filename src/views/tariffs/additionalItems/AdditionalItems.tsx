import { useEffect } from 'react';

import { useAdditionalItemsStore, useRoomCountStore } from 'src/store/store';
import { Typography } from 'src/components/typography';
import { iconList } from 'src/data/additionals';

import style from './AdditionalItems.module.scss';
import ServiceCard from '../../../components/serviceCard/serviceCard';

export const AdditionalItems = () => {
  const { addMaintenancePrice } = useRoomCountStore();
  const { selectedItemPrice, setSelectedItemPrice, addAdditionalItem } = useAdditionalItemsStore();

  useEffect(() => {}, [selectedItemPrice, addMaintenancePrice]);

  const handleClick = (item: any) => {
    const priceNumber = parseInt(item.price.replace(/\s|руб/g, ''));
    setSelectedItemPrice(priceNumber);

    addAdditionalItem(item);

    item.isAdded ? addMaintenancePrice(-priceNumber) : addMaintenancePrice(priceNumber);
    item.isAdded = !item.isAdded;
  };

  return (
    <div className={style.wrapper}>
      <Typography className={style.wrapper_text} variant="h1">
        Выберите опции для Вашей уборки:
      </Typography>
      <div className={style.grid}>
        {iconList.map((icon) => (
          <ServiceCard
            key={icon.alt}
            src={icon.src}
            alt={icon.alt}
            text={icon.text}
            price={`${icon.price}`}
            isSelected={icon.isAdded}
            onClick={() => handleClick(icon)}
          />
        ))}
      </div>
    </div>
  );
};