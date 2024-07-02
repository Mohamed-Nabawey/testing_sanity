import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref } from 'vue';

export const useBigHeaderStoreStore = defineStore('big-header-store', () => {
  const title = ref('here is my title');

  return {
    title,
  };
});

