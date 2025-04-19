import { Heading } from './Heading';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The **Heading** component renders semantic heading tags (\`<h1>\` to \`<h6>\`) based on the \`level\` prop.
It ensures consistent styling while preserving accessibility best practices.

### Usage
Use \`level={1}\` for page titles, and \`level={2-6}\` for section or sub-section headings.

### Accessibility
Proper use of heading levels improves screen reader navigation and content structure.
Avoid skipping heading levels (e.g., going from \`<h1>\` to \`<h4>\` directly).
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  args: {
    level: 1,
    children: 'This is an H1 Heading',
  },
};

export const H2: Story = {
  args: {
    level: 2,
    children: 'This is an H2 Heading',
  },
};

export const CustomStyledHeading: Story = {
  args: {
    level: 3,
    className: 'text-red-500 underline',
    children: 'Custom Styled H3',
  },
};
