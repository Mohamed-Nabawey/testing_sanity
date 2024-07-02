import { ref } from 'vue';

export const useGlobalCounterStore = defineStore('global-counter', () => {
  const counter = ref(0);
  const increment = () => counter.value += 1;
  const doubleCounter = computed(() => counter.value * 2);

  return {
    counter,
    increment,
    doubleCounter,
  };
});

if ((import.meta as any).hot) { // TODO remove the "as any"
  (import.meta as any).hot.accept(acceptHMRUpdate(useGlobalCounterStore, (import.meta as any).hot));
}
