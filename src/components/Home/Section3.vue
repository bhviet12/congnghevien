<script setup>
import { computed } from "vue";
import { content } from "../data/content";

const props = defineProps<{ lang: "en" | "vi" }>();
const data = computed(() => content[props.lang].aboutus);


</script>

<template>
    <section>
        <div>
            <div>
                <h6></h6>
                <h1></h1>
                <p></p>
            </div>
            <!-- <div>
                <div>
                    <span></span>
                    <h1></h1>
                    <p></p>
                </div>
                <div>
                    <span></span>
                    <h1></h1>
                    <p></p>
                </div>
                <div>
                    <span></span>
                    <h1></h1>
                    <p></p>
                </div>
                <div>
                    <span></span>
                    <h1></h1>
                    <p></p>
                </div>
                <div>
                    <span></span>
                    <h1></h1>
                    <p></p>
                </div>
                <div>
                    <span></span>
                    <h1></h1>
                    <p></p>
                </div>                                                                
            </div> -->
             <div>
                <h6>{{ data.section3?.subtitle }}</h6>
                <h1>{{ data.section3?.title }}</h1>
                <p>{{ data.section3?.desc }}</p>
            </div>
            <div>
                <div v-for="(item, idx) in data.section3?.items || []" :key="idx">
                    <span>{{ item.icon }}</span>
                    <h1>{{ item.title }}</h1>
                    <p>{{ item.desc }}</p>
                </div>
            </div>    
        </div>

    </section>
</template>

