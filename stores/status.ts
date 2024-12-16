import { defineStore } from "pinia";

export const useStatusStore = defineStore("status", () => {
  const isMenuOpen = ref(false);
  const currentSection = ref<string | null>(null);
  const isLoading = ref(false);

  const setIsMenuOpen = (val: boolean) => {
    isMenuOpen.value = val
  }

  const setCurrentSection = (section?: string | null) => {
    if(section) {
      currentSection.value = section
      isMenuOpen.value = true
    } else {
      currentSection.value = null
      isMenuOpen.value = false
    }    
  }

  const setIsLoading = (val: boolean) => {
    isLoading.value = val
  }

  return {
    isMenuOpen,
    isLoading,
    currentSection,
    setIsMenuOpen,
    setIsLoading,
    setCurrentSection, 
  };
});