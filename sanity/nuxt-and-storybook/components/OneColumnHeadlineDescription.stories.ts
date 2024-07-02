import { within, userEvent } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import OneColumnHeadlineDescription from './OneColumnHeadlineDescription.vue';
import { getArgTypes } from './componentProps';
import Header3 from './Header3.vue';
import LogoPartners from './LogoPartners.vue';
import TwoColumnImageAndText from './TwoColumnImageAndText.vue';

const meta: Meta<typeof OneColumnHeadlineDescription> = {
  component: OneColumnHeadlineDescription,
  tags: ['autodocs'],
  argTypes: {
    headline: { control: 'text' },
    description: { control: 'text' },
    buttons: { control: 'text', },
    ...getArgTypes(),
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};
export default meta;

type Story = StoryObj<typeof OneColumnHeadlineDescription>;

export const Basic: Story = {};

export const Primary: Story = {
  args: {
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Click to update this subheader')
    await userEvent.click(button);
    canvas.getByText('Subheader count: 0');
  }
};

export const Buttons: Story = {
  args: {
    backgroundImage: "linear-gradient(82.48deg, #010710 1.76%, #0C2441 68.84%)",
    backgroundType: "image",
    description: "<strong>this is bold</strong>",
    overlayColor: true,
    buttons: [
      {
        text: "A",
        active: true,
        href: "/A",
      },
      {
        text: "B",
        active: false,
        href: "/B",
      },
    ]
  },
};

export const SomethingElse: Story = {
  render: (args) => ({
    setup() {
      return {args}
    },
    components: {
      OneColumnHeadlineDescription,
    },
    template: '<p class="bg-slate-400"><OneColumnHeadlineDescription :backgroundImage="args.backgroundImage" headline="hi"/></p>',
  }),
  args: {
    backgroundImage: "linear-gradient(82.48deg, #010710 1.76%, #0C2441 68.84%)",
  },
};

export const EducationPage: Story = {
  render: () => ({
    components: {
      OneColumnHeadlineDescription,
      Header3,
      LogoPartners,
      TwoColumnImageAndText,
    },
    template: `
  <div>
    <OneColumnHeadlineDescription headline="Onshape for Education" class="pt-16"
    :buttons="[
      {
        text: 'Home',
        active: true,
        href: '/en/education',
      },
      {
        text: 'Create an Account',
        active: false,
        href: '/en/education/sign-up',
      },
      {
        text: 'Courses & Curriculum',
        active: false,
        href: '/en/education/courses-curriculum',
      },
      {
        text: 'Plans',
        active: false,
        href: '/en/education/plans',
      },
      {
        text: 'Robotics',
        active: false,
        href: '/en/education/robotics',
      },
      {
        text: 'Collegiate Teams',
        active: false,
        href: '/en/education/collegiate-teams',
      },
    ]" />
    <div class="bg-default-black">
      <div class="flex items-center justify-center max-w-6xl mx-auto pt-16">
        <div>
          <Header3
            text="Onshape is a professional-grade, cloud-native CAD platform that students and educators can access for FREE on any device, anywhere, anytime." />
          <GreenButton text="Create EDU Account" href="/en/education/sign-up" />
        </div>
        <img class="block"
          src="https://www.onshape.com/zink/1200webp/global-assets/img/edu/macbook-iphone_1000x714-2.png">
      </div>
    </div>

    <LogoPartners logo-title="WE ARE PROUD TO PARTNER WITH:" :row1="['https://www.onshape.com/zink/600webp/global-assets/img/edu/iteea-logo-transparent_562162.png',
      'https://www.onshape.com/zink/600webp/global-assets/img/edu/solidprofessor.png',
      'https://www.onshape.com/zink/600webp/global-assets/img/edu/first-logo-transparent.png',
      'https://www.onshape.com/zink/600webp/global-assets/img/edu/dt-logo-transparent_400160.png',
      'https://www.onshape.com/zink/600webp/global-assets/img/edu/mintzukunftschaffen.png']" :row2="['https://www.onshape.com/zink/600webp/global-assets/img/edu/science-olympiad-logo-transparent_552324.png',
        'https://www.onshape.com/zink/600webp/global-assets/img/edu/recfoundation.png',
        'https://www.onshape.com/zink/600webp/en/education/easset_upload_file46375_178795_e.png']" />

    <OneColumnHeadlineDescription class="bg-default-black">
      <template #description>
        <div>Features And Benefits</div>
      </template>
    </OneColumnHeadlineDescription>

    <TwoColumnImageAndText
      src="https://www.onshape.com/zink/1200webp/global-assets/img/edu/jet-engine-in-onshape_1200x800.jpg"
      class="bg-default-black" rev />
    <TwoColumnImageAndText src="https://www.onshape.com/zink/1200webp/en/education/easset_upload_file99910_178795_e.png"
      class="bg-default-black" />
    <TwoColumnImageAndText src="https://www.onshape.com/zink/1200webp/en/education/easset_upload_file71751_178795_e.png"
      class="bg-default-black" rev />
    <TwoColumnImageAndText src="https://www.onshape.com/zink/1200webp/en/education/easset_upload_file17632_178795_e.jpg"
      class="bg-default-black" />
  </div>
    `,
  }),
  args: {
  },
};