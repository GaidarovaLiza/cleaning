import { useState, useContext } from 'react';
import { Checkbox } from 'components/checkBoxs/CheckBox';
import { Typography } from 'components/typography/Typography';
import { ScrollContext } from 'context/ScrollContext';
import style from './SelectClining.module.scss';

export const SelectClining = () => {
  const [general, setGeneral] = useState(false);
  const [supportive, setSupportive] = useState(false);
  const { aboutUsInfoRef } = useContext(ScrollContext)!;

  const scrollToGeneralCleaning = () => {
    aboutUsInfoRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={style.contentWrapper}>
      <div className={style.contentWrapper_item}>
        <Checkbox checked={general} onChange={() => setGeneral(!general)} />
        <Typography
          className={style.contentWrapper_text}
          isCursorPointer={true}
          onClick={scrollToGeneralCleaning}
          variant={'h3'}
        >
          Генеральная уборка
        </Typography>
      </div>
      <div className={style.contentWrapper_item}>
        <Checkbox checked={supportive} onChange={() => setSupportive(!supportive)} />
        <Typography className={style.contentWrapper_text} variant={'h3'}>
          Поддерживающая уборка
        </Typography>
      </div>
    </div>
  );
};
