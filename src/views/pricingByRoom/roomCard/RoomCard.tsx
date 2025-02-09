import { Typography } from 'src/components/typography';
import Check from 'src/assets/check.svg';

import style from './RoomCard.module.scss';
import { DefaultButton } from 'src/components/defaultButton';

interface RoomCardProps {
  title?: string;
  includedOption?: RoomOption[];
  realPrice?: string;
  discontPrice?: string;
}

type RoomOption = {
  id: number;
  name: string;
};

const RoomCard = ({ discontPrice, includedOption, realPrice, title }: RoomCardProps) => {
  console.log(discontPrice, includedOption, realPrice, title);
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_infoBlock}>
        <div className={style.wrapper_infoBlock_item}>разовая уборка</div>
        <div className={style.wrapper_infoBlock_item}>оплата после уборки</div>
      </div>
      <Typography className={style.wrapper_title} color="white" variant="l-regular">
        {title}
      </Typography>
      <div className={style.wrapper_line}></div>
      <Typography color="white" variant="xxs-regular">
        В стоимость включены:
      </Typography>
      <div className={style.wrapper_listWrapper}>
        {includedOption?.map(el => (
          <div key={el.id} className={style.list}>
            <img src={Check}></img>
            <Typography className={style.typography} variant="xxs-regular" color="white">
              {el.name}
            </Typography>
          </div>
        ))}
      </div>
      <Typography className={style.wrapper_realPrice} variant="xs-regular">
        {realPrice}
      </Typography>
      <div className={style.wrapper_buttonBlock}>
        <Typography className={style.wrapper_discontPrice} color="white" variant="xl-semibold">
          {discontPrice}
        </Typography>
        <DefaultButton className={style.button} variant="fulfilled" text="ЗАКАЗАТЬ" onClick={() => {}} />
      </div>
    </div>
  );
};

export default RoomCard;
