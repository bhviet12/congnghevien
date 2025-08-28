<script setup lang="ts">
import { computed } from 'vue';
import { content } from '../data/content';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps<{ lang: 'en' | 'vi' }>();
const data = computed(() => content[props.lang].home);
</script>

<template>
    <section class="relative min-h-[600px] flex items-center justify-between bg-gradient-to-r from-stone-200 via-stone-500 to-black pt-[80px] pl-[100px] pb-[80px]">
        <!-- Nút trái -->
        <button class="absolute left-8 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shadow-lg z-10">
            <FontAwesomeIcon :icon="faAngleLeft" />
        </button>
        <div class="text-left w-[39%] bg-transparent flex flex-col justify-start">
            <p class="normal-case">{{ data.text }}</p>
            <h1 class="text-5xl font-bold text-blue-700 mb-8 pt-5">{{ data.h1 }}</h1>
            <div class="space-y-4">
                <p class="text-lg text-gray-800 normal-case">{{ data.p[0] }}</p>
                <p class="text-lg text-gray-800 normal-case">{{ data.p[1] }}</p>
                <ul class="list-none pl-0 mt-2 normal-case">
                    <li v-for="(line, idx) in data.p.slice(2)" :key="idx" class="text-lg text-gray-900 mb-1">{{ line }}</li>
                </ul>
            </div>
            <div class="flex gap-6 mt-12">
                <a href="#" class="w-[540px] h-[57px] flex items-center justify-center bg-[#1253BE] text-white rounded font-semibold text-[16px] text-center hover:bg-gray-900 transition px-[30px] py-[12px]">{{ data.btn1 }}</a>
                <a href="#" class="w-[540px] h-[57px] flex items-center justify-center bg-gray-900 text-white rounded font-semibold text-[16px] text-center hover:bg-[#1253BE] transition px-[30px] py-[12px]">{{ data.btn2 }}</a>
            </div>
        </div>
        <!-- Chừa khoảng trống bên phải cho ảnh sau này -->
        <div class="w-[40%] h-full flex items-center justify-center"></div>
        <!-- Nút phải -->
        <button class="absolute right-8 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shadow-lg z-10">
            <FontAwesomeIcon :icon="faAngleRight" />
        </button>
    </section>
</template>
