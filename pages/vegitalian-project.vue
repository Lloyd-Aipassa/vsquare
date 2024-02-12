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
    Image: "/vegitalian/vegi-header.webp",
    Title: 'THE VEGITALIAN PROJECT',
    p: '<ul><li>Built a European power-brand for the best, sustainable Italian food</li><li>Make radically more impact</li><li>Unlock the full potential of Vegitalian</li><li>Create value for all stakeholders</li><li>Work hard with lot’s of excitement, new learnings, fun and pride!</li></ul>',
}]
</script>