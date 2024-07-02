import type { Meta, StoryObj } from "@storybook/vue3";
import GreenButton from "./GreenButton.vue";

const meta: Meta<typeof GreenButton> = {
  component: GreenButton,
  tags: ['autodocs'],
  argTypes: {
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};
export default meta

type Story = StoryObj<typeof GreenButton>;

export const Basic: Story = {};