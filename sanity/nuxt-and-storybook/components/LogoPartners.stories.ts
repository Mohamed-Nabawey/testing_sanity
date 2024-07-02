import type { Meta, StoryObj } from "@storybook/vue3";
import LogoPartners from "./LogoPartners.vue";
import LogoPartnersImage from "./LogoPartnersImage.vue";

const meta: Meta<typeof LogoPartners> = {
  component: LogoPartners,
  tags: ['autodocs'],
  argTypes: {
    row1: {type: {name: 'array', value: { name: 'string'}}},
    row2: {type: {name: 'array', value: { name: 'string'}}},
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};
export default meta

type Story = StoryObj<typeof LogoPartners>;

export const Basic: Story = {};

export const SomethingElse: Story = {
  args: {
    row1: [
      'https://www.onshape.com/zink/600webp/global-assets/img/edu/iteea-logo-transparent_562162.png',
      'https://www.onshape.com/zink/600webp/global-assets/img/edu/solidprofessor.png',
      'https://www.onshape.com/zink/600webp/global-assets/img/edu/first-logo-transparent.png',
      'https://www.onshape.com/zink/600webp/global-assets/img/edu/dt-logo-transparent_400160.png',
      'https://www.onshape.com/zink/600webp/global-assets/img/edu/mintzukunftschaffen.png'
    ],
    row2: [
      'https://www.onshape.com/zink/600webp/global-assets/img/edu/science-olympiad-logo-transparent_552324.png',
      'https://www.onshape.com/zink/600webp/global-assets/img/edu/recfoundation.png',
      'https://www.onshape.com/zink/600webp/en/education/easset_upload_file46375_178795_e.png'
    ],
    logoTitle: "Something Else"
  },
};
