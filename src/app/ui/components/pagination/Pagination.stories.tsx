import type { Meta, StoryObj } from '@storybook/react';

import Pagination from './Pagination';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: 'number', defaultValue: 1 },
    totalPages: { control: 'number', defaultValue: 5 },
    onPageChange: { action: 'clicked' },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaginationMain: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    onPageChange: () => console.log('Clicked'),
  },
};