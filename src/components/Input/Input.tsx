import TextField from '@mui/material/TextField';

export type InputProps = {
  name?: string;
  variant: 'outlined' | 'filled' | 'standard';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  inputProps?: { [key: string]: any };
};

export const Input = ({ variant, name, onChange, value, label, inputProps }: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    let newValue = inputValue;

    if (label === 'Номер телефона:' && !inputValue.startsWith('+')) {
      newValue = `+${inputValue}`;
    }

    newValue = newValue.replace(/[^+\d]/g, '');
    newValue = newValue.substring(0, 10);

    onChange(event);
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
