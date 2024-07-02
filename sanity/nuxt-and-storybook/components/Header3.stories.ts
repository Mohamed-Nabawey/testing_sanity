import type { Meta, StoryObj } from "@storybook/vue3";
import Header3 from "./Header3.vue";

const meta: Meta<typeof Header3> = {
  component: Header3,
  tags: ['autodocs'],
  argTypes: {
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};
export default meta

type Story = StoryObj<typeof Header3>;

export const Basic: Story = {};