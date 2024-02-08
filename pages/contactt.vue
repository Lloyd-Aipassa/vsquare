<template>
    <div>
        <Hero :ButtonTekst="ButtonTekst" :Link="Link" :HeroContent="HeroContent" />
    </div>
</template>

<script setup>
// ** Header button  **
const ButtonTekst = 'Interesse? neem contact op'
const Link = '/contact'
// ** Header button  **
const ButtonTekst2 = 'Questions or more info'
const Link2 = '/contact'

// ** Reconmendations **
const HeroContent = [{
    Image: "/hero/header-home.webp",
    Title: 'THE BEST HEALTHY AND SUSTAINABLE FOOD ON EVERY CORNER',
    p: 'There is a growing momentum for people to switch from animal-based to more sustainable, plant-forward diets.To make this switch, most potential flexitarians need more and more tasty and conveniently available restaurants and deliverers to seduce them.',
}]
</script>
