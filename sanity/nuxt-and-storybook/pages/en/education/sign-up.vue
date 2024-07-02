<script setup lang="ts">
import SmallButton from '~/components/SmallButton.vue';
</script>

<template>
  <OneColumnHeadlineDescription headline="Onshape for Education" class="pt-16 bg-default-black"
  :buttons="[
    {
      text: 'Home',
      active: false,
      href: '/en/education',
    },
    {
      text: 'Create an Account',
      active: true,
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
</template>