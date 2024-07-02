import type { Meta, StoryObj } from "@storybook/vue3";
import LogoPartnersImage from "./LogoPartnersImage.vue";

const meta: Meta<typeof LogoPartnersImage> = {
    component: LogoPartnersImage,
    tags: ['autodocs'],
    argTypes: {

    }
}

export default meta;

type Story = StoryObj<typeof LogoPartnersImage>;

export const Basic: Story = {};