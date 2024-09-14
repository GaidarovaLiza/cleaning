import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Checkbox, CheckboxProps } from './CheckBox';

const meta: Meta<typeof Checkbox> = {
  argTypes: {
    checked: {
      control: false,
    },
    onChange: {
      control: false,
    },
    // value: {
    //   control: false,
    // },
  },
  component: Checkbox,
  decorators: [story => <div style={{ display: 'flex', justifyContent: 'center' }}>{story()}</div>],
  title: 'Controls/Checkbox',
};

export default meta;

const Template: StoryFn<CheckboxProps> = args => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: () => {},
  checked: false,
};
