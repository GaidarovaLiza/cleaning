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
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    let newValue = inputValue;

    if (validate) {
      if (label === 'Номер телефона:' && !inputValue.startsWith('+')) {
        newValue = `+${inputValue}`;
      }

      newValue = newValue.replace(/[^+\d]/g, '');
      newValue = newValue.substring(0, 13);
      setIsValid(phoneValidate(newValue));
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
