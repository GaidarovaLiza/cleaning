import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { phoneValidate } from '../../utils/validation';

export type InputProps = {
  name?: string;
  variant: 'outlined' | 'filled' | 'standard';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  inputProps?: { [key: string]: any };
  validate?: boolean;
};

export const Input = ({ variant, name, onChange, value, label, inputProps, validate }: InputProps) => {
  let [isValid, setIsValid] = useState(true);
  const availiableSymbolsForPhoneNumber = new Set('0123456789');
  const [prevValue, setPrevValue] = useState('+375');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    let newValue = inputValue;
    const resetString = '+375';

    if (validate) {
      if (label === 'Номер телефона:' && inputValue.startsWith('+')){
        if (inputValue.substring(0, 4) !== resetString) {
          newValue = resetString;
        } else{
          const tmpStr = inputValue;
          if((tmpStr.length <= 11) && availiableSymbolsForPhoneNumber.has(tmpStr[tmpStr.length - 1])) {
            newValue = inputValue;
            setPrevValue(inputValue);
          } else {
            newValue = prevValue;
          }
        }
      } else {
        newValue = resetString;
      }
    }
    onChange({ ...event, target: { ...event.target, value: newValue } });
  };

  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant={variant}
      value={value}
      onChange={handleInputChange}
      inputProps={inputProps}
      name={name}
      helperText={isValid ? null : 'Неверный формат'}
      error={!isValid}
    />
  );
};
