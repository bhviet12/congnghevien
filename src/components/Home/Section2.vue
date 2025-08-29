<script setup lang="ts">
import { computed, ref } from "vue";
import { content } from "../data/content";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const props = defineProps<{ lang: "en" | "vi" }>();
const data = computed(() => content[props.lang].aboutus);

const currentSlide = ref(0);
const images = [
  "/placeholder.svg?height=400&width=300",
  "/placeholder.svg?height=400&width=300", 
  "/placeholder.svg?height=400&width=300",
  "/placeholder.svg?height=400&width=300",
  "/placeholder.svg?height=400&width=300"
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.length;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? images.length - 1 : currentSlide.value - 1;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-8">
    <div class="flex flex-col lg:flex-row gap-8 items-start">
      <div class="lg:w-1/3 relative">
        <div class="relative overflow-hidden rounded-lg">
          <img 
            :src="images[currentSlide]" 
            :alt="`Image ${currentSlide + 1}`"
            class="w-full h-80 object-cover transition-transform duration-300"
          />
          
          <button 
            @click="prevSlide"
            class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
          >
            <FontAwesomeIcon :icon="faChevronLeft" class="w-5 h-5 text-gray-600" />
          </button>
          
          <button 
            @click="nextSlide"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
          >
            <FontAwesomeIcon :icon="faChevronRight" class="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        <div class="flex justify-center mt-4 space-x-2">
          <button
            v-for="(_, index) in images"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'w-3 h-3 rounded-full transition-colors',
              currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
            ]"
          />
        </div>
      </div>

      <div class="lg:w-2/3 space-y-6">
        <div class="space-y-4">
          <h2 class="font-sans font-semibold text-xl text-blue-600">
            {{ data.title }}
          </h2>
          <h1 class="font-sans font-bold text-4xl lg:text-5xl text-gray-900 leading-tight">
            {{ data.p1 }}
          </h1>
          <p class="text-gray-700 leading-relaxed text-base">
            {{ data.p2 }}
          </p>
        </div>

        <div class="space-y-4">
          <h2 class="font-sans font-semibold text-xl text-blue-600">
            {{ data.p3 }}
          </h2>
          <h2 class="text-gray-700 font-sans font-semibold text-xl">
            {{ data.video }}
          </h2>
          
          <div class="relative w-[400px] h-[225px] bg-gray-100 rounded-xl overflow-hidden shadow-lg transition-all duration-200 hover:-translate-y-2 mx-auto">
            <iframe
              src="https://www.youtube.com/watch?v=ugLZaBqz73k&t=1s"
              :title="data.titlevideo"
              class="absolute inset-0 w-full h-full rounded-xl"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
             />
          </div>
          
          <p class="text-center text-sm text-gray-600 mt-2">
            {{ data.titlevideo }}
          </p>
        </div>

        <div class="pt-4">
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors">
            {{ data.btn }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
