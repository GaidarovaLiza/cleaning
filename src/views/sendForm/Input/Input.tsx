import TextField from '@mui/material/TextField';
import { phoneValidate } from 'src/utils/validation.ts';

export type InputProps = {
  name?: string;
  variant: 'outlined' | 'filled' | 'standard';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  inputProps?: { [key: string]: never };
  validate?: boolean;
};

export const Input = ({ variant, name, onChange, value, label, inputProps, validate }: InputProps) => {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    let newValue = inputValue;
    if (validate) {
      newValue = phoneValidate(inputValue);
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
    />
  );
};