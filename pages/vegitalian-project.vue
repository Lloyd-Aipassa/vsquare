<template>
    <div>
        <section class="hero">
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
        </section>
        <section id="about-vegiatialan">
            <img src="/vegitalian/PizzaWijn.webp" class="desk" alt="girl eating vegan pizza">
            <img src="/vegitalian/PizzaWijn-mob.webp" class="mob" alt="girl eating vegan pizza">
            <CardsWhiteCard :ButtonTekst="ButtonTekst2" :Link="Link2" :WhiteCard="WhiteCard" />
        </section>
        <section id="contact-block">
            <div class="contact-block-container">
                <ContactAlgemeen />
            </div>
            <img src="/vegitalian/CinnamonHand.webp" alt="cup cake">
        </section>
    </div>
</template>

<script setup>
// ** Header button  **
const ButtonTekst = 'Questions or more info'
const Link = '/contact'

// ** Reconmendations **
const HeroContent = [{
    Image: "/vegitalian/Vegi-header.webp",
    Title: 'THE VEGITALIAN PROJECT',
    MobImage: "/vegitalian/Vegi-header-mob.webp",
}]

// ** White card button  **
const ButtonTekst2 = 'More about vegitalian '
const Link2 = 'https://vegitalian.com/'

// ** White card **
const WhiteCard = [{
    Title: 'ABOUT THE VEGITALIAN',
    p: 'Vegitalian is a vision driven food concept. Vegitalian serves delicious plant forward modern Italian food. Founded In 2020, Vegitalian has grown into a modern Italian restaurant; a warm and loving place to eat consciously without concessions, on flavor, quality and experience. In this bold contemporary kitchen, a whole new experience of plant-based and vegetarian food has been created. <br><br>Vegitalian has developed into a brand that inspires people to care about food, themselves and the planet. A brand that attracts and connects a beautiful diversity of like-minded people. And above all, a brand that never stops spreading the word of sustainability, with colorful flavors and heavenly recipes.',
}]
</script>

<style scoped>
.hero {
    padding: 0 0 80px 200px;
    /* height: 100vh; */
}

ul.bullets {
    /* list-style-type: circle; */
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

/************** About vegiatialan ************/

#about-vegiatialan {
    position: relative;
    min-height: 902px;
    background-color: #87B16D1A;
    padding: 80px 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#about-vegiatialan img {
    margin-right: -80px;
}

.mob {
    display: none;
}


/************** Contact ************/


#contact-block {
    padding: 0 200px 80px;
    margin: 80px auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

#contact-block img {
    margin-left: -154px;
}

#contact-block .contact-block-container {
    align-self: center;
}


/************** 13 inch ************/

@media screen and (max-width: 1440px) {

    /************** Hero ************/
    .hero {
        padding: 18px 0 80px 96px;
        height: fit-content;
    }

    /************** About vegiatialan ************/

    #about-vegiatialan {
        padding: 80px 96px;
    }

    /************** Contact ************/

    #contact-block {
        padding: 0 96px 80px;
        margin: 80px auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}


/************** tablet ************/

@media screen and (max-width: 1240px) {
    #about-vegiatialan {
        position: relative;
        height: 100%;
        background-color: #87B16D1A;
        padding: 0px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 200px;
    }

    #about-vegiatialan img {
        margin-right: 0px;
        margin-bottom: -250px;
        width: 80%;
    }

    .mob {
        display: none;
    }

    /************** Contact ************/


    #contact-block {
        padding: 0 00px 80px;
        margin: 80px auto 0;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }

    #contact-block img {
        margin-left: 0px;
        margin-bottom: -100px;
        margin: 53px 0 -100px 0;
    }

    #contact-block .contact-block-container {
        align-self: center;
    }
}

/************** Mobile ************/

@media screen and (max-width: 720px) {

    /************** Hero ************/
    .hero {
        padding: 0;
        height: fit-content;
    }


    ul.bullets p {
        width: 100%;
    }

    ul.bullets li:nth-child(1) {
        margin-bottom: 1px;
    }

    ul.bullets li:nth-child(6) {
        margin-bottom: -10px;
    }

    /************** About vegiatialan ************/

    #about-vegiatialan {
        position: relative;
        height: 100%;
        background-color: #87B16D1A;
        padding: 302px 24px 220px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 0;
    }

    #about-vegiatialan img {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        width: 100%;
    }

    .mob {
        display: block;
    }

    .desk {
        display: none;
    }


    #contact-block {
        background-color: #87B16D1A;
        padding: 0 0 10px;
        margin: 0px auto 0;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }

    #contact-block img {
        width: 100%;
        margin-left: 0;
        margin-bottom: -50px;
    }

    #contact-block .contact-block-container {
        align-self: center;
    }
}
</style>