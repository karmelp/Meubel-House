import type { Meta, StoryObj } from '@storybook/react';

import RoundLinkBtn from './RoundLinkBtn';

const meta = {
  title: 'Components/RoundLinkBtn',
  component: RoundLinkBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', defaultValue: 'View More' },
    link: { control: 'text', defaultValue: '/blog' },
  },
} satisfies Meta<typeof RoundLinkBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RoundLinkBtnMain: Story = {
  args: {
    text: 'View More',
    link: '/blog',
  },
};
