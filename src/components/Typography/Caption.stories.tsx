import { Caption } from './Caption';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Caption> = {
  title: 'Typography/Caption',
  component: Caption,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The **Caption** component is used for rendering small, supportive text such as image captions or helper labels.

### Usage
Common use cases include form labels, footnotes, and secondary details. Usually styled smaller and lighter than paragraphs.

### Accessibility
Semantically rendered using a \`<span>\` or similar, depending on context. Make sure it’s used within accessible labeling where needed.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Caption>;

export const Default: Story = {
  args: {
    children: 'This is a caption text used under an image or label.',
  },
};

export const Subtle: Story = {
  args: {
    className: 'text-sm text-gray-500',
    children: 'A soft, subtle caption often used for metadata or notes.',
  },
};
