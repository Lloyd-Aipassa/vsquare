<template>
    <div class="card">
        <h2>THE CHALLENGE</h2>
        <p> <span>Current out of home (and to the home) options provide for sub-optimal offerings and lack scale, limiting
                their potential impact</span>
            V-SQUARE aims to invest in the high potential plant-forward restaurant chain Vegitalian and help it scale
            up faster and make its offering even healthier, tastier and more conveniently available at many more
            places. This way radically more people will be seduced to eat less and less animal-based food and as a
            result, we will have significant positive impact and can benefit from a huge market opportunity
        </p>
        <ButtonsMainButton :ButtonTekst="ButtonTekst" :Link="Link" />
    </div>
</template>

<script setup>
const props = defineProps({
    ButtonTekst: String,
    Link: String,
})

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



onMounted(() => {


    //====animatie 3======
    let tl4 = gsap.timeline({
        scrollTrigger: {
            markers: true,
            start: '-400 bottom',
            trigger: ".card",
        }
    })
        tl4.fromTo('.card', { opacity: '0', y: '60' }, { opacity: '1', y: '0', stagger: 0.2, duration: 1.3 });
        tl4.scrollTrigger.refresh();

})
</script>

<style scoped>
.card {
    background-color: #fff;
    max-width: 650px;
    padding: 80px;
}

.card p {
    margin: 24px 0 36px;
}

.card span {
    display: block;
    padding: 0 0 16px 0;
    font-size: 18px;
    font-weight: 500;
}
</style>