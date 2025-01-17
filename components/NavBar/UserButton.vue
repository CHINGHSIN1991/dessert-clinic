<script setup lang="ts">
const authStore = useAuthStore();

const handleLogout = () => {
  authStore.signOut();
};
</script>

<template>
  <div class="relative">
    <b class="absolute right-11 top-2.5 whitespace-nowrap">Hello chinghisnc</b>
    <DropdownMenu class="border-0">
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" class="px-3 h-11">
          <Icon name="akar-icons:person" class="text-slate-600 w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-56">
        <DropdownMenuLabel>{{ `Hi ${authStore.user?.name ?? 'User'}` }}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <NuxtLink to="/member/detail">
            <DropdownMenuItem>
              <span>{{ $t('member-detail') }}</span>
            </DropdownMenuItem>
          </NuxtLink>
          <DropdownMenuItem v-if="authStore.isLoggedIn" @click="handleLogout">
            <span>{{ $t('logout') }}</span>
          </DropdownMenuItem>
          <NuxtLink v-else to="/member/login">
            <DropdownMenuItem>
              <span>{{ $t('member-login-signup') }}</span>
            </DropdownMenuItem>
          </NuxtLink>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>

</template>

<style scoped></style>