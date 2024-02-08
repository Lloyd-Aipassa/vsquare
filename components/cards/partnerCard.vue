<template>
    <div class="partnercard" v-for="(content, index) in Partner" :key="index">
        <img :src="content.ImageBig" alt="">
        <img :src="content.ImageSmall" class="img-small" alt="">
        <p> {{ content.p }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    Partner: Array,
})

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



onMounted(() => {
    //====animatie partners======
    gsap.timeline({
        scrollTrigger: {
            // markers: true,
            start: 'top 95%',
            trigger: "#partners",
        }
    })
        .fromTo('.partnercard', { opacity: '0', y: '60' }, { opacity: '1', y: '0', stagger: 0.4, duration: 1.3 });
})
</script>

<style scoped>
.partnercard {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    align-items: center;
    aspect-ratio: 1;
    max-width: 500px;
    box-shadow: 2px 4px 10px 0px #00000026;
}

.partnercard p {
    text-align: center;
    padding: 0 24px 24px;
}

.partnercard img.img-small {
    margin: 24px 0;
}
</style>