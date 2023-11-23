import type { Meta, StoryObj } from '@storybook/react';

import ProductTabs from './ProductTabs';

const meta = {
  title: 'Components/ProductTabs',
  component: ProductTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: [
        { name: 'Description', content: 'Description content' },
        { name: 'Additonal Information', content: 'Features content' },
        { name: 'Reviews[5]', content: 'Reviews content' },
    ]
  },
} satisfies Meta<typeof ProductTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductTabsMain: Story = {
  args: {
    tabs: [
        { name: 'Description', content: 'Description content' },
        { name: 'Additonal Information', content: 'Features content' },
        { name: 'Reviews[5]', content: 'Reviews content' },
    ]
  },
};