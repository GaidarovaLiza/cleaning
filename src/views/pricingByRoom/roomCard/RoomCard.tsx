import style from './RoomCard.module.scss';

interface RoomCardProps {
  title?: string;
  includedOption?: string[];
  realPrice?: string;
  discontPrice?: string;
}

const RoomCard = ({ discontPrice, includedOption, realPrice, title }: RoomCardProps) => {
  console.log(discontPrice, includedOption, realPrice, title);
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_infoBlock}>
        <div className={style.wrapper_infoBlock_item}>разовая уборка</div>
        <div className={style.wrapper_infoBlock_item}>оплата после уборки</div>
      </div>
    </div>
  );
};

export default RoomCard;
