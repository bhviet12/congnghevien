
<script setup lang="ts">
import { computed } from 'vue';
import { content } from '../data/content';
import { faFacebook, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import logo from "@/assets/vite.svg"

const props = defineProps<{ lang: 'en' | 'vi' }>();
const menuItems = computed(() => props.lang === 'en' ? content.en.menu : content.vi.menu);
</script>

<template>
  <nav class="sticky top-0 z-50 flex items-center justify-between bg-white px-8 min-h-[70px] shadow-sm">
    <div class="flex items-center">
      <img src="/public/vite.svg" alt="Logo" class="h-12" />
    </div>
    <ul class="flex gap-8 list-none m-0 p-0">
      <li v-for="(item, idx) in menuItems" :key="idx">
        <a href="#" class="font-semibold text-gray-800 text-[17px] hover:text-blue-600 transition-colors">{{ item }}</a>
      </li>
    </ul> 
    <div class="flex items-center gap-4">
      <div class="relative">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <FontAwesomeIcon :icon="faSearch" />
        </span>
        <input
          class="border border-gray-200 rounded-full pl-9 pr-4 py-1 text-[15px] focus:border-blue-600 outline-none transition w-36"
          type="text"
          placeholder="Tìm kiếm..."
        />
      </div>
      <div class="flex gap-2">
        <a href="#" title="Facebook" class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-gray-800 text-[18px] hover:bg-blue-600 hover:text-white transition"><span><FontAwesomeIcon :icon="faFacebook" /></span></a>
        <a href="#" title="Youtube" class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-gray-800 text-[18px] hover:bg-blue-600 hover:text-white transition"><span><FontAwesomeIcon :icon="faYoutube" /></span></a>
        <a href="#" title="LinkedIn" class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-gray-800 text-[18px] hover:bg-blue-600 hover:text-white transition"><span><FontAwesomeIcon :icon="faLinkedinIn" /></span></a>
      </div>
    </div>
  </nav>
</template>
  