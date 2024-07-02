import type { Meta, StoryObj } from "@storybook/vue3";
import TwoColumnImageAndText from "./TwoColumnImageAndText.vue";

const meta: Meta<typeof TwoColumnImageAndText> = {
  component: TwoColumnImageAndText,
  tags: ['autodocs'],
  argTypes: {
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};
export default meta

type Story = StoryObj<typeof TwoColumnImageAndText>;

export const Basic: Story = {};