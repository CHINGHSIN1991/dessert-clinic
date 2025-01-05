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
    <div class="border-2 border-slate-600 mx-4 mt-4 flex items-center justify-between mb-0">
      <div class="flex justify-between w-full h-[36px] items-center border-r-2 border-slate-600">
        <LanguageMenu />
        <NuxtLink to="/">
          <img src="@/assets/kuanLOGO.png" alt="" class="w-20 object-contain mx-4">
        </NuxtLink>
        <div>
          <Button v-if="authStore.isLoggedIn" variant="ghost" @click="handleLogout">
            {{ $t('logout') }}
          </Button>
        </div>
      </div>
      <Button variant="ghost" @click="onMenuClick" class="px-5 hover:bg-slate-600 hover:text-white">
        menu
      </Button>
    </div>
    <div class="flex w-full align-top absolute p-2">
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