import type { Meta, StoryObj } from '@storybook/react';

import SquareLinkBtn from './SquareLinkBtn';

const meta = {
  title: 'Components/SquareLinkBtn',
  component: SquareLinkBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', defaultValue: 'View More' },
    link: { control: 'text', defaultValue: '/blog' },
  },
} satisfies Meta<typeof SquareLinkBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SquareLinkBtnMain: Story = {
  args: {
    text: 'View More',
    link: '/blog',
  },
};
