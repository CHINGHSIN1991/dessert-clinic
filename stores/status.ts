import { defineStore } from "pinia";

export const useStatusStore = defineStore("status", () => {
  const isMenuOpen = ref(false);
  const isLoading = ref(false);

  const setIsMenuOpen = (val: boolean) => {
    isMenuOpen.value = val
  }

  const setIsLoading = (val: boolean) => {
    isLoading.value = val
  }

  return {
    isMenuOpen,
    isLoading,
    setIsMenuOpen,
    setIsLoading,    
  };
});