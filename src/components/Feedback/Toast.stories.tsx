import { Toast } from './Toast';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Feedback/Toast',
  component: Toast,
  argTypes: {
    message: {
      control: 'text',
      description: 'Message to be displayed inside the toast',
    },
    type: {
      control: 'select',
      options: ['success', 'error', 'info', 'warning'],
      description: 'Type of the toast notification (success, error, info, or warning)',
    },
    autoDismiss: {
      control: 'boolean',
      description: 'Enable auto-dismiss of the toast after a set duration',
    },
    duration: {
      control: 'number',
      description: 'Time in milliseconds before the toast auto-dismisses',
      if: { arg: 'autoDismiss', truthy: true }, 
    },
  },
} as Meta<typeof Toast>;

const Template: StoryFn<typeof Toast> = (args) => <Toast {...args} />;

// Default Toast
export const DefaultToast = Template.bind({});
DefaultToast.args = {
  message: 'This is a toast message',
  type: 'info',
  autoDismiss: false,
};

// Success Toast
export const SuccessToast = Template.bind({});
SuccessToast.args = {
  message: 'Success! Your action was completed.',
  type: 'success',
  autoDismiss: true,
  duration: 3000,
};

// Error Toast
export const ErrorToast = Template.bind({});
ErrorToast.args = {
  message: 'Error! Something went wrong.',
  type: 'error',
  autoDismiss: true,
  duration: 3000,
};

// Info Toast
export const InfoToast = Template.bind({});
InfoToast.args = {
  message: 'Info: Please check your input.',
  type: 'info',
  autoDismiss: false,
};

// Warning Toast
export const WarningToast = Template.bind({});
WarningToast.args = {
  message: 'Warning! Something might be wrong.',
  type: 'warning',
  autoDismiss: false,
};
