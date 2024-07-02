import { within, userEvent } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import { useBigHeaderStoreStore } from '../stores/big-header-store.js';
import BigHeader from './BigHeader.vue';


const meta: Meta<typeof BigHeader> = {
  component: BigHeader,
  tags: ['autodocs'],
  argTypes: {
    suffix: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};
export default meta;

type Story = StoryObj<typeof BigHeader>;

export const Basic: Story = {};

export const Primary: Story = {
  args: {
    suffix: 'argument',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Click to update this subheader')
    await userEvent.click(button);
    canvas.getByText('Subheader count: 0');
  }
};

export const SomethingElse: Story = {
  render: () => ({
    components: {
      BigHeader,
    },
    template: '<p class="bg-slate-400"><BigHeader /></p>',
  }),
  args: {
    suffix: 'else',
  },
  play: (context) => {
    const store = useBigHeaderStoreStore();
    store.title = 'somethingElse Prefix ';
  }
};