import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  datePicker: {
    '& .MuiPickersLayout-contentWrapper': {
      minWidth: 450,
      '@media (max-width: 500px)': {
        minWidth: 300,
      },
    },
    '& .MuiDateCalendar-root': {
      height: 380,
      maxHeight: 500,
      width: 450,

      '@media (max-width: 500px)': {
        height: 400,
        maxHeight: 500,
        width: '100%',
      },
    },
    '& .MuiPickersCalendarHeader-root': {
      width: 425,
      marginBottom: 30,

      '@media (max-width: 500px)': {
        width: '100%',
        paddingLeft: 12,
      },
    },
    '& .MuiPickersCalendarHeader-labelContainer': {
      fontSize: '2rem',
    },
    '& .MuiPickersCalendarHeader-label': {
      margin: '0',
    },
    '& .MuiDayCalendar-weekContainer': {
      margin: '15px 0',
    },
    '& .MuiIconButton-root.MuiPickersArrowSwitcher-button': {
      fontSize: '2.5rem',
    },
    '& .MuiSlideTransition-root.MuiDayCalendar-slideTransition': {
      height: 450,
      '@media (max-width: 500px)': {
        height: 335,
      },
    },
    '& .MuiPickersSlideTransition-root.MuiDayCalendar-slideTransition': {
      display: 'block',
      position: 'relative',
      minHeight: 240,
      overflowX: 'visible',
    },
    '& .MuiTypography-root.MuiDayCalendar-weekDayLabel': {
      fontSize: '1.05rem',
      width: 46,
      margin: '0 14px',

      '@media (max-width: 500px)': {
        margin: '0 12px',
        width: 42,
      },
    },
    '& .MuiButtonBase-root.MuiPickersDay-root': {
      fontSize: '1.05rem',
      width: 52,
      margin: '0 14px',

      '@media (max-width: 500px)': {
        margin: '0 10px',
        width: 50,
      },
      '@media (max-width: 400px)': {
        margin: '0 7px',
        width: 50,
      },
    },
    '& .MuiPickersDay-root': {
      fontSize: '1.05rem',
      width: 52,
      margin: '0 14px',

      '@media (max-width: 500px)': {
        margin: '0 10px',
        width: 50,
      },
      '@media (max-width: 400px)': {
        margin: '0 7px',
        width: 50,
      },
    },
  },
});
