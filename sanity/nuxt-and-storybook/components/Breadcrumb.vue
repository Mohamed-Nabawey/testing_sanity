<template>
  <nav aria-label="breadcrumb">
    <ol class="post-breadcrumbs flex py-9 text-weight-medium">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
        <nuxt-link v-if="index < breadcrumbs.length - 1" :to="crumb.path">{{ crumb.name }} </nuxt-link>
        <span v-else class="">  &gt; {{ crumb.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const breadcrumbs = computed(() => {
  console.log('amany',route);
  const pathArray = route.path.split('/').filter(path => path).slice(1);
  const crumbs = pathArray.map((path, index) => {
    return {
      name: capitalize(path.replace(/-/g, ' ')),
      path: '/' + pathArray.slice(0, index + 1).join('/')
    };
  });

  return [...crumbs];
});

</script>

<style lang="scss">
.breadcrumb-item {
  color: #6e6e6e;
  a {
    color: #00820a;
  }
}
</style>