
<script setup lang="ts">
defineProps<{ lang: 'en' | 'vi'; setLang: (value: 'en' | 'vi') => void }>();
import HeaderTop from '../Header/HeaderTop.vue';
import Menu from '../Header/Menu.vue';
</script>

<template>
  <header>
    <div>
      <HeaderTop :lang="lang" :setLang="setLang" />
      <Menu :lang="lang" />
    </div>
  </header>
</template>
