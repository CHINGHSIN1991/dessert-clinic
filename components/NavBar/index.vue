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

const handleLogout = () => {
  authStore.signOut();
};
</script>

<template>
  <div>
    <div class="border-2 h-12 border-slate-600 mx-4 mt-4 flex items-center justify-between mb-0">
      <div class="flex justify-between w-full h-12 items-center border-r-2 border-slate-600 overflow-hidden">
        <LanguageMenu />
        <NuxtLink to="/" class="h-12 flex items-center p-0 pl-24">
          <img src="@/assets/kuanLOGO.png" alt=""
            class="h-16 w-36 object-contain mx-4 opacity-75 hover:opacity-100 hover:w-40 transition-all duration-300 ">
        </NuxtLink>
        <div class="flex items-center">
          <Button variant="ghost" class="px-3 h-11">
            <Icon name="akar-icons:person" class="text-slate-600 w-4 h-4" />
          </Button>
          <Button variant="ghost" class="px-3 h-11">
            <Icon name="akar-icons:cart" class="text-slate-600 w-4 h-4" />
          </Button>
          <Button v-if="authStore.isLoggedIn" variant="ghost" @click="handleLogout">
            {{ $t('logout') }}
          </Button>
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