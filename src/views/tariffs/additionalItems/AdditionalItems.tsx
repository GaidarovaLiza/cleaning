import { useEffect } from 'react';
import { Grid } from '@mui/material';;

import { useAdditionalItemsStore, useRoomCountStore } from 'src/store/store';
import { Typography } from 'src/components/typography';
import { iconList } from 'src/data/additionals';

import styles from './AdditionalItems.module.scss';

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
    <div className={styles.wrapper}>
      <Typography className={styles.wrapper_text} variant="h1">
        Выберите опции для Вашей уборки:
      </Typography>
      <Grid className={styles.grid} container spacing={1} columns={{ xs: 2, sm: 4, md: 12 }}>
        {iconList.map(icon => (
          <Grid
            key={icon.alt}
            item
            xs={0}
            sm={2}
            md={4}
            sx={{ paddingLeft: 2 }}
            className={icon.isAdded ? `${styles.gridItem} ${styles.selectedItem}` : styles.gridItem}
          >
            <div className={styles.link} onClick={() => handleClick(icon)}>
              <img className={styles.img} src={icon.src} alt={icon.alt} />
              <Typography className={styles.text} variant="semiBold">
                {icon.text}
              </Typography>
              <div className={styles.priceBlock}>
                <Typography variant="semiBold">{icon.price}</Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
