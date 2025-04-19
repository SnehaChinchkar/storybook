import { TextInput } from './TextInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextInput> = {
  title: 'DataEntry/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The **TextInput** component is a standard text field used for user input. It includes states for normal, focused, error, and disabled inputs.

### Usage
Use the \`TextInput\` component to collect text from users, such as names, emails, or other string-based information.

### Accessibility
- The input is automatically associated with its label.
- ARIA roles like \`aria-invalid\` and \`aria-label\` are used for accessibility.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

// Normal state
export const Normal: Story = {
  args: {
    label: 'Name ',
    placeholder: 'Enter your name',
  },
};

// Focused state
export const Focused: Story = {
  args: {
    label: 'Name ',
    placeholder: 'Enter your name',
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input');
    input?.focus(); 
  },
};

// Error state
export const Error: Story = {
  args: {
    label: 'Email ',
    placeholder: 'Enter your email',
    error: ' Invalid email format',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: 'Username ',
    placeholder: 'Enter your username',
    disabled: true,
  },
};

// Accessibility features
export const WithAccessibility: Story = {
  args: {
    label: 'Email ',
    placeholder: 'Enter your email',
    error: ' Invalid email format',
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input');
    if (input) {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-label', 'Email input with error');
    }
  },
};
