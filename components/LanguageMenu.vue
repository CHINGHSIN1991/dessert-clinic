<script setup lang="ts">
import { languageList } from '#build/imports';
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
      <Button variant="ghost" class="w-12">
        {{ currentLabel }}
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