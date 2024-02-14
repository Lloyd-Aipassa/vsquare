<template>
    <div>
        <Hero :ButtonTekst="ButtonTekst" :Link="Link" :HeroContent="HeroContent">
            <ul class="bullets">
                <li>
                    <p><span>V-SQUARE has joined forces with the Vegitalian team and is highly motivated to:</span></p>
                </li>
                <li>
                    <p>Built a European power-brand for the best, sustainable Italian food</p>
                </li>
                <li>
                    <p>Make radically more impact</p>
                </li>
                <li>
                    <p>Unlock the full potential of Vegitalian</p>
                </li>
                <li>
                    <p>Create value for all stakeholders</p>
                </li>
                <li>
                    <p>Work hard with lot’s of excitement, new learnings, fun and pride!</p>
                </li>
            </ul>
        </Hero>
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
    MobImage: "/vegitalian/vegi-header.webp",
}]
</script>

<style scoped>
ul.bullets {
    list-style-type: circle;
    padding-left: 20px;
    margin: 24px 0 40px;
}

ul.bullets p {
    max-width: 817px;
    /* margin: 24px 0 40px; */
}

ul.bullets li:nth-child(1) {
    margin-bottom: 1px;
    list-style-type: none;
    margin-left: -20px;
}

ul.bullets p span {
    list-style-type: none;
    font-size: 16px;
    font-weight: 600;
}

/************** Mobile ************/


@media screen and (max-width: 720px) {

    /************** Hero ************/
    ul.bullets p {
        width: 100%;
    }
}
</style>