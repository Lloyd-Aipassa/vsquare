<template>
    <div class="card" v-for="(card, index) in WhiteCard" :key="index">
        <h2>{{ card.Title }}</h2>
        <p v-html="card.p"></p>
        <ButtonsMainButton :ButtonTekst="ButtonTekst" :Link="Link" />
    </div>
</template>

<script setup>
const props = defineProps({
    ButtonTekst: String,
    Link: String,
    WhiteCard: {
        type: Array,
        required: true
    },
})





import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



onMounted(() => {


    //====animatie 3======
    let tl4 = gsap.timeline({
        scrollTrigger: {
            markers: false,
            start: '100 bottom',
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

@media screen and (max-width: 720px) {
    .card {
        padding: 24px;
        margin-bottom: -180px;
        box-shadow: 2px 4px 10px 0px #00000026;
    }

    .card h2 {
        margin-bottom: -9px;
    }

    .card p {
        margin: 24px 0;
    }
}
</style>