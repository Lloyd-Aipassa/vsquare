<template>
    <div class="hero-container" v-for="(content, index) in HeroContent" :key="index">
        <img :src="content.Image" alt="Header imges of vegan food" class="desk animate-right-left">
        <img :src="content.MobImage" alt="Header imges of vegan food" class="mob animate-right-left">
        <!-- alt="Header imges of vegan food" class="animate-right-left"> -->
        <div class="hero-contant-container">
            <div class="hero-content animatie-2">
                <h1 id="healthy">{{ content.Title }}</h1>
                <slot>
                    <ul class="bullets">
                        <li>
                            <p>content</p>
                        </li>
                    </ul>
                </slot>
            </div>
            <div class="animatie-2">
                <ButtonsMainButton :ButtonTekst="ButtonTekst" :Link="Link" />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    ButtonTekst: String,
    Link: String,
    HeroContent: Array,
})

import { gsap } from 'gsap';
let tl = gsap.timeline();

onMounted(() => {

    tl.to('.animate-right-left', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' })
        .to('.animatie-2', { opacity: '1', duration: 0.5, delay: 0.7,  })
    // .to('.animatie-2', { clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', duration: 0.5, delay: 0.7, stagger: 1.5 })
})
</script>

<style scoped>
.hero-container .mob {
    display: none;
}

.animate-right-left {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    transition: all 1.0s;
}

.animatie-2 {
    opacity: 0;
    /* clip-path: polygon(100% 0, 0 0, 0 0, 100% 0); */
    transition: all 1.5s;
}

.hero-container h1 {
    max-width: 1300px;
    margin-top: 40px;
}

.hero-container p {
    max-width: 817px;
    margin: 24px 0 40px;
}

.hero-container img {
    width: 100%;
}



@media screen and (max-width: 1440px) {}

@media screen and (max-width: 1240px) {}

@media screen and (max-width: 720px) {
    .hero-container {
        padding: 0;
    }

    .hero-container .mob {
        display: block;
    }

    .hero-container .desk {
        display: none;
    }

    .hero-contant-container {
        padding: 40px 24px;
    }

    .hero-container h1 {
        max-width: 1300px;
        margin-top: 0px;
        margin-bottom: -10px;
    }

    .hero-container p {
        margin: 24px 0;
        width: 100%;
    }


}
</style>

