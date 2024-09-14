import { Meta, StoryFn } from '@storybook/react';
import { Typography, TypographyProps } from './Typography';

const meta: Meta<typeof Typography> = {
  argTypes: {
    className: { control: false },
    variant: {
      control: { type: 'radio' },
      options: [
        'h1',
        'h2',
        'h3',
        'regular_xs',
        'regular_s',
        'regular',
        'medium_xs',
        'medium_s',
        'medium',
        'semiBold_s',
        'semiBold',
      ],
    },
  },
  component: Typography,
  decorators: [story => <div style={{ display: 'flex', justifyContent: 'center' }}>{story()}</div>],
  title: 'Typography/Typography',
};

export default meta;
const Template: StoryFn<TypographyProps> = args => <Typography variant={args.variant}>Text</Typography>;

export const Default = Template.bind({});
Default.args = {
  variant: 'h1',
};
