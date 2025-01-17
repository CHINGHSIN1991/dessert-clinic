<script setup lang="ts">
const statusStore = useStatusStore();
const authStore = useAuthStore();
const { getSectionList } = useMenu();

const currentSectionList = computed(() => {
  return getSectionList(authStore.isLoggedIn);
});

const onMenuClick = () => {
  statusStore.setIsMenuOpen(!statusStore.isMenuOpen);
};

</script>

<template>
  <div>
    <div class="border-2 h-12 border-slate-600 mx-4 mt-4 flex items-center justify-between mb-0">
      <div class="flex justify-between w-full h-12 items-center border-r-2 border-slate-600 ">
        <LanguageMenu />
        <NuxtLink to="/" class="h-12 flex items-center p-0 pl-24">
          <img src="@/assets/kuanLOGO.png" alt=""
            class="h-16 w-36 object-contain mx-4 opacity-85 hover:opacity-100 hover:w-40 transition-all duration-100 ">
        </NuxtLink>
        <div class="flex items-center relative">
          <NavBarUserButton />
          <NuxtLink to="/member/cart">
            <Button variant="ghost" class="px-3 h-11 relative">
              <Icon name="akar-icons:cart" class="text-slate-600 w-4 h-4" />
              <Badge class="absolute left-6 bottom-7 z-50 bg-red-500 hover:bg-red-700">20</Badge>
            </Button>
          </NuxtLink>
        </div>
      </div>
      <Button variant="ghost" @click="onMenuClick" class="px-5 h-11 hover:bg-slate-600 hover:text-white">
        menu
      </Button>
    </div>
    <div class="flex w-full align-top absolute p-2 z-10">
      <NavBarMenuSection v-for="(section, index) in currentSectionList" :section="section" :index="index"
        :key="section.title_string" />
    </div>
  </div>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: height 0.3s ease;
}

.menu-enter-from,
.menu-leave-to {
  height: 0;
  overflow: hidden;
}

.menu-enter-to,
.menu-leave-from {
  height: auto;
  overflow: hidden;
}
</style>