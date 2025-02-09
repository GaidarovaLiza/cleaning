import React, { useCallback } from 'react';
import { Switch as MuiSwitch } from '@mui/material';

interface SwitchProps {
  disabled?: boolean;
  loading?: boolean;
  onChange: (checked: boolean) => void;
  size?: 'normal' | 'small';
  value?: boolean;
}

export const Switch = ({ disabled = false, loading, onChange, size = 'normal', value }: SwitchProps) => {
  const isSmall = size !== 'normal';
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.checked);
    },
    [onChange]
  );

  return (
    <MuiSwitch
      checked={value || false}
      disabled={disabled || loading}
      onChange={handleChange}
      onClick={event => event.stopPropagation()}
      sx={{
        height: !isSmall ? 40 : 28,
        width: !isSmall ? 60 : 40,
        padding: '4px',
        marginRight: '-4px',
        '& .MuiSwitch-switchBase': {
          '>.MuiSwitch-input': {
            left: '-75%',
          },
          '&.Mui-checked': {
            transform: `translateX(${!isSmall ? '20px' : '12px'})`,
            color: 'white',
            '+.MuiSwitch-track': {
              backgroundColor: '#2C67F6',
              opacity: 1,
            },
            ':hover': {
              bgcolor: 'rgba(48, 163, 87, 0.1)',
            },
            '&.Mui-disabled': {
              color: 'white',
            },
          },
          '&.Mui-disabled': {
            color: 'white',
          },
          '> .MuiTouchRipple-root': {
            display: 'none',
          },
          ':hover': {
            bgcolor: 'rgba(179, 179, 179, 0.1)',
          },
          ':active': {
            '& .MuiSwitch-thumb': {
              height: !isSmall ? 26 : 18,
              width: !isSmall ? 26 : 18,
            },
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: '25%',
          },
        },
        '& .MuiButtonBase-root': {
          padding: !isSmall ? '8px' : '7px',
        },
        ':active': {
          '& .MuiButtonBase-root:not(.Mui-disabled)': {
            padding: !isSmall ? '7px' : '5px',
          },
        },
        '& .MuiSwitch-thumb': {
          height: !isSmall ? 24 : 14,
          width: !isSmall ? 24 : 14,
        },
        '& .MuiSwitch-track': {
          backgroundColor: '#2C67F6',
          borderRadius: 16,
          opacity: 1,
        },
      }}
    />
  );
};
