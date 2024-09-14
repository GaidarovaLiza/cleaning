import React, { useCallback, useState } from 'react';
import { Checkbox as MuiCheckbox } from '@mui/material';

export interface CheckboxProps {
  checked?: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox = ({ checked = false, onChange }: CheckboxProps) => {
  const [state, setState] = useState(checked);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setState(event.target.checked);
      onChange(event.target.checked);
    },
    [onChange]
  );

  return (
    <MuiCheckbox
      checked={state}
      checkedIcon={
        <svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_128_12319)">
            <rect fill="#2B5DE6" height="20" rx="5" width="20" x="2.5" y="2.5" />
            <path
              d="M15.837 10.5347L11.6678 14.7013L9.16138 12.2024"
              stroke="white"
              strokeLinecap="square"
              strokeWidth="1.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_128_12319">
              <rect fill="white" height="20" rx="5" width="20" x="2.5" y="2.5" />
            </clipPath>
          </defs>
        </svg>
      }
      icon={
        <svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg">
          <rect fill="white" height="19" rx="4.5" width="19" x="3" y="3" />
          <rect height="19" rx="4.5" stroke="#CCCCCC" width="19" x="3" y="3" />
        </svg>
      }
      onChange={handleChange}
    />
  );
};
