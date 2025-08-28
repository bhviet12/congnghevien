<script setup lang="ts">
import { ref, computed } from 'vue';
import { content } from '../data/content';
import { faPhone, faLocationDot, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps<{ lang: 'en' | 'vi'; setLang: (value: 'en' | 'vi') => void }>();
const LANGUAGES = [
  { code: 'vn', label: 'Tiếng Việt' },
  { code: 'us', label: 'English' },
];
const selected = ref(LANGUAGES[0]);
const showDropdown = ref(false);
const text = computed(() => props.lang === 'en' ? content.en.headertop : content.vi.headertop);

function handleSelect(langObj: { code: string; label: string }) {
  selected.value = langObj;
  props.setLang(langObj.code === 'us' ? 'en' : 'vi');
  showDropdown.value = false;
}
</script>

<template>
  <div class="sticky top-0 z-40 flex items-center justify-between bg-[#001D2D] px-8 py-4 w-full">
    <!-- Left: Advise & Phone -->
    <div class="flex items-center gap-4 min-w-[320px]">
      <span class="font-bold text-lg text-white">{{ text.advise }}</span>
      <span class="text-sky-700"><FontAwesomeIcon :icon="faPhone" /></span>
      <span class="text-white">{{ text.number }}</span>
    </div>
    <!-- Center: Address, Email, Working Hours -->
    <div class="flex items-center gap-8 flex-1 justify-center">
      <div class="flex items-center gap-4">
        <span class="text-sky-700"><FontAwesomeIcon :icon="faLocationDot" /></span>
        <span class="text-white">{{ text.address }}</span>
        <span class="text-sky-700"><FontAwesomeIcon :icon="faEnvelope" /></span>
        <span class="text-white">{{ text.email }}</span>
      </div>
      <div class="flex items-center gap-4">
        <span class="text-sky-700"><FontAwesomeIcon :icon="faClock" /></span>
        <span class="text-white">{{ text.workingHours }}</span>
      </div>
    </div>
    <!-- Right: Language Dropdown (Tailwind) -->
    <div class="flex items-center">
      <div class="relative">
        <button
          class="border border-white text-white rounded px-4 py-2 text-base cursor-pointer transition-shadow shadow-sm hover:shadow-lg bg-transparent flex items-center"
          type="button"
          @click="showDropdown = !showDropdown"
        >
          <span class="font-bold mr-2">{{ selected.code.toUpperCase() }}</span>
          <span>{{ selected.label }}</span>
          <span class="ml-2 text-xs">▼</span>
        </button>
        <div
          v-if="showDropdown"
          class="absolute top-full right-0 min-w-[160px] bg-white rounded-xl shadow-lg mt-2 opacity-100 pointer-events-auto transform translate-y-0 transition-all duration-300 z-50"
        >
          <div
            v-for="langObj in LANGUAGES"
            :key="langObj.code"
            @click="handleSelect(langObj)"
            :class="['px-4 py-3 cursor-pointer text-gray-800 text-sm bg-none transition-colors font-normal', selected.code === langObj.code ? 'bg-blue-600 text-white' : '', 'hover:bg-blue-600 hover:text-white']"
          >
            <span class="font-bold mr-2">{{ langObj.code.toUpperCase() }}</span>
            <span>{{ langObj.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
