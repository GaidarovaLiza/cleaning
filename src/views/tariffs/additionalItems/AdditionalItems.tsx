import { useEffect } from 'react';
import { Grid } from '@mui/material';
import { Typography } from 'components/typography/Typography';
import { iconList } from 'data/additionals';
import { useAdditionalItemsStore, useRoomCountStore } from 'store/store';

import style from './AdditionalItems.module.scss';

export const AdditionalItems = () => {
  const { addMaintenancePrice } = useRoomCountStore();
  const { selectedItemPrice, setSelectedItemPrice, addAdditionalItem } = useAdditionalItemsStore();

  useEffect(() => {}, [selectedItemPrice, addMaintenancePrice]);

  const handleClick = (item: any) => {
    const priceNumber = parseInt(item.price.replace(/\s|руб/g, ''));
    setSelectedItemPrice(priceNumber);

    addAdditionalItem(item.text);

    item.isAdded ? addMaintenancePrice(-priceNumber) : addMaintenancePrice(priceNumber);
    item.isAdded = !item.isAdded;
  };

  return (
    <div className={style.wrapper}>
      <Typography className={style.wrapper_text} variant="h1">
        Выберите опции для Вашей уборки:
      </Typography>
      <Grid className={style.grid} container spacing={1} columns={{ xs: 2, sm: 4, md: 12 }}>
        {iconList.map(icon => (
          <Grid
            key={icon.alt}
            item
            xs={0}
            sm={2}
            md={4}
            className={icon.isAdded ? `${style.gridItem} ${style.selectedItem}` : style.gridItem}
          >
            <div className={style.link} onClick={() => handleClick(icon)}>
              <img className={style.img} src={icon.src} alt={icon.alt} />
              <Typography className={style.text} variant="semiBold">
                {icon.text}
              </Typography>
              <div className={style.priceBlock}>
                <Typography variant="semiBold">{icon.price}</Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
