import { defineStore } from "pinia";

export const useLoading = defineStore("loading", () => {
  const isLoading = ref(false);

  const setIsLoading = (val: boolean) => {
    isLoading.value = val
  }

  return {
    isLoading,
    setIsLoading,
  };
});