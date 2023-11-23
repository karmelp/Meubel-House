import type { Meta, StoryObj } from '@storybook/react';

import BigBtn from './BigBtn';

const meta = {
  title: 'Components/BigBtn',
  component: BigBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', defaultValue: 'View More' },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof BigBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BigBtnMain: Story = {
  args: {
    title: 'Submit',
    onClick: () => console.log('Clicked'),
  },
};
