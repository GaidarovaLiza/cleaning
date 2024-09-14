import { Meta, StoryFn } from '@storybook/react';

import { Modal, ModalProps } from './Modal';
import { DefaultButton } from 'components/defaultButton';

const meta: Meta<typeof Modal> = {
  argTypes: {
    buttons: {
      control: false,
    },
    children: {
      control: false,
    },
    header: {
      control: {
        type: 'text',
      },
    },
    onClose: {
      control: false,
    },
    open: {
      control: 'boolean',
    },
  },
  component: Modal,
  decorators: [story => <div style={{ margin: '0 auto', maxWidth: '280px', textAlign: 'center' }}>{story()}</div>],
  title: 'Modal/Modal',
};

export default meta;

const Template: StoryFn<ModalProps> = args => <Modal {...args}>Text</Modal>;

export const WithOneButton = Template.bind({});
WithOneButton.args = {
  buttons: (
    <>
      <DefaultButton onClick={() => {}} text={'Logout'} variant={'fulfilled'} />
      <DefaultButton onClick={() => {}} text={'Cancel'} variant={'outlined'} />
    </>
  ),
  header: 'Header',
  onClose: () => {},
  open: false,
};

export const WithTwoButton = Template.bind({});
WithTwoButton.args = {
  buttons: (
    <>
      <DefaultButton onClick={() => {}} text={'Logout'} variant={'fulfilled'} />
      <DefaultButton onClick={() => {}} text={'Cancel'} variant={'outlined'} />
    </>
  ),
  header: 'Header',
  onClose: () => {},
  open: false,
};
