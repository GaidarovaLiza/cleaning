import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers';
import 'dayjs/locale/ru';
import { useCalendarStore } from 'src/store/store';
import { Typography } from 'src/components/typography';

import { useStyles } from './overideStyle';


export const Calendar = () => {
  const { selectedDate, setSelectedDate } = useCalendarStore();

  const today = dayjs();
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h2">Выберите удобную для Вас дату уборки</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <StaticDatePicker
          className={classes.datePicker}
          value={selectedDate}
          onChange={newValue => setSelectedDate(newValue)}
          displayStaticWrapperAs="desktop"
          shouldDisableDate={day => day.isBefore(today, 'day')}
        />
      </LocalizationProvider>
    </div>
  );
};
