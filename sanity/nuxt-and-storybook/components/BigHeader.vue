<template>
  <div class="" @click="onClick">
    <h1 class="m-10">{{ bigHeaderStore.title }} - {{ props.suffix }}</h1>
    <h3 class="m-10">{{ subheader }}</h3>
    <div class="flex flex-col">
      <button
        class="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="newTitle">Click to update all headers</button>
      <button
        class="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="newSub">Click to update this subheader</button>
    </div>
  </div>
</template>

<script setup>
import { useBigHeaderStoreStore } from '../stores/big-header-store';
import { ref } from 'vue';

const props = defineProps({
  suffix: {
    default: 'Suffix is a prop and is per instance',
    type: String,
  }
})

const bigHeaderStore = useBigHeaderStoreStore();
bigHeaderStore.title = 'Header prefix is shared state';
const newTitle = () => bigHeaderStore.title = `Everyone is now: ${new Date().toLocaleTimeString()}`;

const emit = defineEmits(['click']);

const subheader = ref('default subheader - is per instance of component');
const newSub = () => {
  subheader.value = `Subheader count: ${count.value}`
}

const count = ref(0);
const onClick = () => {
  count.value += 1;
  console.log('i clicked');
  emit('click');
  return false;
};

defineExpose({
  subheader,
})
</script>

<style scoped>
h1 {
  background-color: rgb(208, 173, 230);
  border: 1px dotted green;
}

</style>
