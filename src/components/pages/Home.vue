
<script setup lang="ts">
defineProps<{ lang: 'en' | 'vi'; setLang: (value: 'en' | 'vi') => void }>();
import Section1 from '../Home/Section1.vue';
import Section2 from '../Home/Section2.vue';
import Section3 from '../Home/Section3.vue';
</script>

<template>
  <Section1 :lang="lang" />
  <Section2 :lang="lang"/>
  <Section3 :lang="lang"/>
</template>