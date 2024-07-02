import type { Meta, StoryObj } from "@storybook/vue3";
import SmallButton from "./SmallButton.vue";

const meta: Meta<typeof SmallButton> = {
  component: SmallButton,
  tags: ['autodocs'],
  argTypes: {
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};
export default meta

type Story = StoryObj<typeof SmallButton>;

export const Basic: Story = {};
