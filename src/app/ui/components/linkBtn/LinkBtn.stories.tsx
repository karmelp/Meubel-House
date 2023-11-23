import type { Meta, StoryObj } from '@storybook/react';

import LinkBtn from './LinkBtn';

const meta = {
  title: 'Components/LinkBtn',
  component: LinkBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', defaultValue: 'View More' },
    link: { control: 'text', defaultValue: '/shop' },
  },
} satisfies Meta<typeof LinkBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkBtnMain: Story = {
  args: {
    text: 'View More',
    link: '/shop',
  },
};
