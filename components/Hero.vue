<template>
    <section class="hero" v-for="(content, index) in HeroContent" :key="index">
        <img :src="content.Image" alt="Header imges of vegan food" class="animate-right-left">
        <div class="hero-content animatie-2">
            <h1 id="healthy">{{ content.Title }}</h1>
            <p v-html="content.p"></p>
        </div>
        <ButtonsMainButton :ButtonTekst="ButtonTekst" :Link="Link" />
    </section>
</template>

<script setup>
const props = defineProps({
    ButtonTekst: String,
    Link: String,
    HeroContent: Array,
})

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


let tl = gsap.timeline();

onMounted(() => {

    tl.to('.animate-right-left', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 0. })
        .to('.animatie-2', { clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', duration: 0.5, delay: 0.7 })
})
</script>

<style scoped>
.hero {
    padding: 18px 0 80px 200px;
}

.animate-right-left {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    transition: all 1.0s;
}

.animatie-2 {
    clip-path: polygon(100% 0, 0 0, 0 0, 100% 0);
    transition: all 1.5s;
}

.hero h1 {
    max-width: 1300px;
    margin-top: 40px;
}

.hero p {
    max-width: 817px;
    margin: 24px 0 40px;
}

.hero img {
    width: 100%;
}
</style>

