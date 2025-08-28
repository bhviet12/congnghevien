<script setup lang="ts">
import { ref } from 'vue';
import Head from './components/pages/Header.vue';
import Home from './components/pages/Home.vue';

const lang = ref<'en' | 'vi'>('vi');
const setLang = (value: 'en' | 'vi') => {
  lang.value = value;
};
</script>

<template>
  <div>
    <Head :lang="lang" :setLang="setLang" />
    <Home :lang="lang" :setLang="setLang" />
  </div>
</template>
