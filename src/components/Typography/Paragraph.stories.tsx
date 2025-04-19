import { Paragraph } from './Paragraph';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Paragraph> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The **Paragraph** component is used for rendering blocks of body text.

### Usage
Use this component for standard text content in your UI. It's styled consistently with your design system's typography scale.

### Accessibility
Rendered as a semantic \`<p>\` tag to preserve document structure and improve screen reader behavior.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: 'This is a standard paragraph of text used in the UI.',
  },
};

export const Emphasized: Story = {
  args: {
    className: 'text-blue-600 italic',
    children: 'This paragraph is styled with custom Tailwind classes.',
  },
};
