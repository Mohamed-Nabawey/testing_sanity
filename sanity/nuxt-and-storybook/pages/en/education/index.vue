<script setup lang="ts">
import SmallButton from '~/components/SmallButton.vue';
</script>

<template>
  <div>
    <OneColumnHeadlineDescription headline="Onshape for Education" class="pt-16 bg-default-black"
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
</template>