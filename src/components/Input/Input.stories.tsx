import { Meta, StoryFn } from '@storybook/react';
import { Input, InputProps } from './Input';

const meta: Meta<typeof Input> = {
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
    variant: ['outlined', 'filled', 'standard'],
  },
  component: Input,
  decorators: [story => <div style={{ display: 'flex', justifyContent: 'centre' }}>{story()}</div>],
  title: 'Input/Input',
};

export default meta;
const Template: StoryFn<InputProps> = args => (
  <Input variant={args.variant} label={args.label} onChange={() => {}} value={args.value} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Input',
  variant: 'outlined',
  value: '',
};
