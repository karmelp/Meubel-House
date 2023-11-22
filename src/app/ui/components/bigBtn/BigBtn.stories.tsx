import type { Meta, StoryObj } from '@storybook/react';

import BigBtn from './BigBtn';

const meta = {
  title: 'Components/BigBtn',
  component: BigBtn,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', defaultValue: 'View More' },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof BigBtn>;

export default meta;
//type Story = StoryObj<typeof meta>;

const Template = (args: any) => <BigBtn {...args} />;
export const Default = Template.bind({});
