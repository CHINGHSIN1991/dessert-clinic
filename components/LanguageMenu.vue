<script setup lang="ts">
import { languageList } from '../constants.js';
const { setLocaleCookie, locale } = useI18n();

const currentLabel = computed(() =>
  languageList.find(option => option.value === locale.value)?.label ?? 'Lang'
);

watch(locale, (newLocale) => {
  setLocaleCookie(newLocale);
});

</script>
<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-14 h-11">
        <div class="flex items-center px-1">
          <Icon name="hugeicons:language-skill" class="text-slate-600 w-4 h-4" />
          <span class="text-sm pl-1">{{ currentLabel }}</span>
        </div>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-32">
      <DropdownMenuLabel>Language</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup v-model="locale">
        <DropdownMenuRadioItem v-for="option in languageList" :value="option.value" :key="option.value">
          {{ option.name }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped></style>