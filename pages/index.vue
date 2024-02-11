<template>
    <div>
        <Hero :ButtonTekst="ButtonTekst" :Link="Link" :HeroContent="HeroContent" />
        <section class="vegitalian animatie-3">
            <CardsWhiteCard :ButtonTekst="ButtonTekst2" :Link="Link2" />
        </section>
        <section class="why-vsqaure">
            <div class="why-vsqaure-container">
                <div class="text">
                    <h2>WHY V-SQUARE</h2>
                    <p class="sub-title">V-SQUARE is an impact-driven collective that conjoins the required experience,
                        manpower, capital and
                        knowledge to firepower the scale up of plant forward restaurant chains.
                    </p>
                    <div class="why-vsqaure-img-text-container">
                        <img src="/home/whyVsquare/graph.svg" alt="">
                        <p>Strong track record in scale up environments (e.g. Student Hotel) and management of hospitality
                            and food-service brands</p>
                    </div>
                    <div class="why-vsqaure-img-text-container">
                        <img src="/home/whyVsquare/bolletjes.svg" alt="">
                        <p>With an extensive network in hospitality and real estate</p>
                    </div>
                    <div class="why-vsqaure-img-text-container">
                        <img src="/home/whyVsquare/zakgeld.svg" alt="">
                        <p>Extensive experience and good reputation in Banking, Private Equity and M&A arena</p>
                    </div>
                    <div class="why-vsqaure-img-text-container">
                        <img src="/home/whyVsquare/handenschudden.svg" alt="">
                        <p>Strong partnerships with Wageningen University and Sandenburg Concept Creation (that supported
                            a.o.: Tony Chocolonely, Stach, Landmarkt, Spar, Hema, Tosti Club)</p>
                    </div>
                    <div class="why-vsqaure-img-text-container">
                        <img src="/home/whyVsquare/lamp.svg" alt="">
                        <p>30+ years of experience in concept creation and roll-out of food-service brands.</p>
                    </div>
                    <div class="why-vsqaure-img-text-container">
                        <img src="/home/whyVsquare/radars.svg" alt="">
                        <p>With capacity that can be used flexible in accordance with the needs of the company</p>
                    </div>
                </div>
                <img class="why-groente why-big" src="/home/whyVsquare/tangerine.webp" alt="groente">
                <img class="why-groente why-small" src="/home/whyVsquare/tangerine.webp" alt="groente">
            </div>
        </section>
        <section id="team">
            <h2>V-SQUARE TEAM</h2>
            <p class="team-sub-title">V-SQUARE is an impact-driven collective that conjoins the required experience,
                manpower, capital and knowledge to firepower the scale up of Vegitalian
            </p>
            <div class="team">
                <div class="team-card">
                    <img src="/home/team/Felix.webp" alt="">
                    <div class="team-card-content">
                        <p>Felix Hillen</p>
                        <button>Read more <img src="/buttons/arrow.svg" alt=""></button>
                    </div>
                </div>
                <div class="team-card">
                    <img src="/home/team/Lucas.webp" alt="">
                    <div class="team-card-content">
                        <p>Lucas Rijckmans</p>
                        <button>Read more <img src="/buttons/arrow.svg" alt=""></button>
                    </div>
                </div>
                <div class="team-card">
                    <img src="/home/team/Marcus.webp" alt="">
                    <div class="team-card-content">
                        <p>Markus Konings</p>
                        <button>Read more <img src="/buttons/arrow.svg" alt=""></button>
                    </div>
                </div>
                <div class="team-card">
                    <img src="/home/team/Arjan.webp" alt="">
                    <div class="team-card-content">
                        <p>Arjan Witteveen</p>
                        <button>Read more <img src="/buttons/arrow.svg" alt=""></button>
                    </div>
                </div>
            </div>
        </section>
        <div class="woods">
            <p class="frank animate-words">FRANK</p>
            <p class="simple animate-words">SIMPLE</p>
            <p class="network animate-words">NETWORK</p>
            <p class="hands-on animate-words">HANDS ON</p>
            <p class="committed animate-words">COMMITTED & INVOLVED</p>
            <p class="energy animate-words">ENERGY</p>
            <p class="entrepreneurship animate-words">ENTREPRENEURSHIP</p>
            <p class="pragmatic animate-words">PRAGMATIC</p>
        </div>
        <section id="smart-capital">
            <h2>SMART CAPITAL</h2>
            <p class="sc-sub-title">V-SQUARE is an impact-driven collective that conjoins the required experience, manpower,
                capital and
                knowledge to firepower the scale up of Vegitalian
            </p>
            <div class="sc-cards-container">
                <div class="sc-card">
                    <img src="/home/smartcapital/check.svg" alt="">
                    <p>Over 150+ transactions</p>
                </div>
                <div class="sc-card">
                    <img src="/home/smartcapital/check2.svg" alt="">
                    <p>Experienced in retail, food service, real estate, food & agri, industry, TIC and business services
                    </p>
                </div>
                <div class="sc-card">
                    <img src="/home/smartcapital/check3.svg" alt="">
                    <p>Advisor in complex merger & acquisition, financing, buy and sale transactions</p>
                </div>
                <div class="sc-card">
                    <img src="/home/smartcapital/check4.svg" alt="">
                    <p>Board members in big Corporates, multidisciplinary</p>
                </div>
                <div class="sc-card">
                    <img src="/home/smartcapital/check8.svg" alt="">
                    <p>Active in restructuring, turn-around and debt advisory</p>
                </div>
                <div class="sc-card">
                    <img src="/home/smartcapital/check7.svg" alt="">
                    <p>Experienced investment fund management</p>
                </div>
                <div class="sc-card">
                    <img src="/home/smartcapital/check6.svg" alt="">
                    <p>CFO as a service, member supervisory board</p>
                </div>
                <div class="sc-card">
                    <img src="/home/smartcapital/check5.svg" alt="">
                    <p>Extensive network of investment funds, family offices and informal investors</p>
                </div>
            </div>
            <p class="sc-sub-title-bottom-text"><span>Funding:</span><br> V-SQUARE is an impact-driven collective that
                conjoins the required
                experience, manpower,
                capital and
                knowledge to firepower the scale up of Vegitalian
            </p>
        </section>

        <section id="partners">
            <div class="partner-left-section">
                <h2 class="partnercard">PARTNERS OF <br>V-SQUARE</h2>
                <CardsPartnerCard :Partner="Partner" />
            </div>
            <div class="partner-right-section">
                <CardsPartnerCard :Partner="Partner2" />
                <CardsPartnerCard :Partner="Partner3" />
            </div>
        </section>

        <section id="contact-block">
            <div class="contact-block-container">
                <ContactAlgemeen />
            </div>
            <img src="/vegitalian/CinnamonHand.webp" alt="">
        </section>
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

// ** Parteners **
const Partner = [{
    ImageBig: "/home/partners/wageningen.webp",
    ImageSmall: '/home/partners/wageningenSmall.webp',
    p: 'Wageningen University & Research (WUR) is het samenwerkingsverband tussen Wageningen University en Stichting Wageningen Research.',
}]
const Partner2 = [{
    ImageBig: "/home/partners/sanderburg.webp",
    ImageSmall: '/home/partners/sanden.webp',
    p: 'Elk concept en verhaal verdient een stevige basis. Wij leveren dat met onze expertise op het gebied van Strategy & Consultancy.',
}]
const Partner3 = [{
    ImageBig: "/home/partners/fruit.webp",
    ImageSmall: '/home/partners/foodservice.webp',
    p: 'Het FoodService Instituut Nederland (FSIN) is een onafhankelijk kennisplatform in de foodsector.',
}]



import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//====register the gsap Plugin======
gsap.registerPlugin(ScrollTrigger);



onMounted(() => {
    //====animatie WHY V-SQUARE======
    let tl2 = gsap.timeline({
        scrollTrigger: {
            // markers: true,
            start: 'top bottom',
            scrub: true,
            trigger: '.why-vsqaure',
        }
    })
    tl2.fromTo('.why-big', { opacity: '1', y: '200' }, { opacity: '1', y: '-600' });


    let tl2Mob = gsap.timeline({
        scrollTrigger: {
            // markers: true,
            start: 'top 900',
            end: "+=800",
            scrub: true,
            trigger: '.why-vsqaure',
        }
    })
    tl2Mob.fromTo('.why-small', { opacity: '1', x: '100%' }, { opacity: '1', x: '0' });



    // ====animatie in bos achtergrond Woorden======
    let tl3 = gsap.timeline({
        scrollTrigger: {
            // markers: true,
            start: 'top 95%',
            trigger: '.woods',
        }
    })
    tl3.fromTo('.animate-words', { opacity: '0', y: '100' }, { opacity: '1', y: '0', stagger: 0.3, duration: 1.3 });

})

</script>

<style scoped>
.vegitalian {
    background-image: url("/vegitalian/vegitalian-pizzabar.webp");
    background-size: cover;
    padding: 130px 0 130px 200px;
}

/************** WHY V-SQUARE SECTION ************/

.why-vsqaure {
    padding: 80px 0 80px 200px;
}

.why-vsqaure-container {
    position: relative;
    padding: 80px 0 80px 80px;
    background: linear-gradient(266.72deg, #778171 0%, #8EA680 99.03%);
    overflow-y: clip;
    overflow-x: visible;
}


.why-vsqaure-container p.sub-title {
    max-width: 528px;
    margin: 24px 0;
    font-weight: 600;
}

.why-vsqaure-img-text-container {
    display: flex;
    gap: 50px;
    align-items: center;
    margin-bottom: 24px;
}


.why-vsqaure-img-text-container img {
    width: 30px;
}

.why-vsqaure-img-text-container p {
    max-width: 511px;
}

.why-vsqaure-container img.why-groente {
    position: absolute;
    top: 0;
    right: 0;
}

.why-small {
    display: none;
}

.why-vsqaure-container h2,
.why-vsqaure-container p {
    color: #fff;
}

/************** TEAM ************/

.team {
    display: grid;
    width: 996px;
    margin: 0 auto 80px;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
}

#team h2 {
    text-align: center;
    margin-bottom: 8px;
}

p.team-sub-title {
    max-width: 813px;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    align-self: center;
    margin: auto;
    margin-bottom: 48px;
}

.team-card {
    display: flex;
}

.team-card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-green);
    width: 248px;
}

.team-card-content p {
    color: var(--color-light-green);
    font-size: 18px;
    line-height: 26px;
    font-weight: 600;
}

.team-card-content button {
    display: flex;
    align-items: center;
    gap: 10px;
    border: none;
    background-color: #77817100;
    color: #fff;
    font-size: 16px;
    font-weight: 600;

}

/************** woods section ************/

.woods {
    background-image: url("/home/bos/Bos.webp");
    padding: 130px 0 130px 200px;
    height: 100vh;
    position: relative;
}

.woods p {
    color: var(--color-light-green);
}

.network {
    position: absolute;
    top: 18%;
    right: 25%;
    font-size: 70px;
    font-weight: 600;
}

.frank {
    position: absolute;
    top: 20%;
    left: 25%;
    font-size: 50px;
    font-weight: 600;
}

.simple {
    position: absolute;
    top: 30%;
    left: 45%;
    font-size: 40px;
    font-weight: 600;
}

.hands-on {
    position: absolute;
    top: 50%;
    left: 15%;
    font-size: 40px;
    font-weight: 600;
}

.committed {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 35px;
    font-weight: 600;
}

.pragmatic {
    position: absolute;
    top: 70%;
    left: 25%;
    font-size: 50px;
    font-weight: 600;
}

.energy {
    position: absolute;
    top: 60%;
    left: 52%;
    font-size: 50px;
    font-weight: 600;
}

.entrepreneurship {
    position: absolute;
    top: 80%;
    left: 65%;
    font-size: 30px;
    font-weight: 600;
}

/************** Smart capital ************/

#smart-capital {
    max-width: 1260px;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#smart-capital h2 {
    text-align: center;
    margin-bottom: 8px;
}

p.sc-sub-title {
    max-width: 813px;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    align-self: center;
    margin-bottom: 48px;
}

.sc-cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;
    margin-bottom: 80px;
}

.sc-card {
    display: flex;
    flex-direction: column;
    box-shadow: 2px 4px 10px 0px #00000026;
    aspect-ratio: 1;
    align-items: center;
    padding: 40px 24px 0px;
    text-align: center;
}

.sc-card img {
    height: 90px;
    width: auto;
}

p.sc-sub-title-bottom-text span {
    color: var(--color-green);
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    margin-bottom: 48px;
}

p.sc-sub-title-bottom-text {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    margin-bottom: 48px;
    max-width: 813px;
    text-align: center;
    align-self: center;
}

#partners {
    display: flex;
    justify-content: center;
    gap: 35px;
}

#partners h2 {
    margin-bottom: 70px;
}

.partner-right-section,
.partner-left-section {
    display: flex;
    flex-direction: column;
    gap: 35px;
}

#contact-block {
    background-color: #87B16D1A;
    padding: 80px 200px;
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

@media screen and (max-width: 1440px) {
    .vegitalian {
        background-image: url("/vegitalian/vegitalian-pizzabar.webp");
        padding: 96px 0 96px 96px;
    }

    /************** WHY V-SQUARE SECTION ************/

    .why-vsqaure {
        padding: 80px 0 80px 96px;
        overflow: clip;

    }


    .why-vsqaure-container img.why-groente {
        position: absolute;
        top: 250px;
        right: -30px;
        width: 49%;
    }

    /************** WOODS SECTION ************/

    .network {
        position: absolute;
        top: 18%;
        right: 15%;
        font-size: 70px;
        font-weight: 600;
    }


    /************** Contact ************/

    #contact-block {
        background-color: #87B16D1A;
        padding: 80px 96px;
        margin: 80px auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }



}

@media screen and (max-width: 1240px) {}




/************** Mobile ************/


@media screen and (max-width: 720px) {

    .vegitalian {
        background-image: url("/vegitalian/vegitalian-pizzabar.webp");
        background-size: contain;
        padding: 180px 24px 24px;
        margin-bottom: 180px;
        background-repeat: no-repeat;
    }


    /************** WHY V-SQUARE SECTION ************/

    .why-vsqaure {
        padding: 0;
    }

    .why-vsqaure-container {
        position: relative;
        padding: 480px 24px 24px;
        background: linear-gradient(266.72deg, #778171 0%, #8EA680 99.03%);
        overflow-x: clip;
        overflow-y: visible;
        display: flex;
        flex-direction: column-reverse;
    }


    .why-vsqaure-img-text-container {
        gap: 4px;
        flex-direction: column;
        align-items: flex-start;
    }

    .why-small {
        display: block;
        position: absolute;
        top: 0;
        left: 24px;
    }

    .why-vsqaure-container img.why-groente {
        position: absolute;
        top: 250px;
        right: -30px;
    }

    .why-big {
        display: none;
    }



    /* .why-vsqaure-img-text-container img {
        width: 30px;
    } */


    .why-vsqaure-container img.why-groente {
        position: absolute;
        top: -20px;
        right: 0;
        width: 342px;
    }

    /* TEAM */

    #team {
        padding: 40px 24px 0;
    }

    .team {
        width: 100%;
        grid-template-columns: 1fr;
        gap: 4px;
        margin-bottom: 40px;
    }

    p.team-sub-title {
        margin-bottom: 40px;
    }

    #team img {
        width: 50%;
    }

    .team-card-content {
        width: 50%;
        align-items: flex-start;
        padding-left: 14px;
    }

    #team button img {
        width: 35px;
    }



    /************** WOODS MOBILE ************/
    .woods {
        background-image: url("/home/bos/Bos.webp");
        padding: 24px;
        height: 100vh;
        position: relative;
        overflow: hidden;
    }


    .network {
        position: absolute;
        top: 43%;
        right: 25%;
        font-size: 55px;
        font-weight: 600;
    }

    .frank {
        position: absolute;
        top: 10%;
        left: 15%;
        font-size: 40px;
        font-weight: 600;
    }

    .simple {
        position: absolute;
        top: 35%;
        left: 39%;
        font-size: 60px;
        font-weight: 600;
    }

    .hands-on {
        position: absolute;
        top: 23%;
        left: 22%;
        font-size: 40px;
        font-weight: 600;
    }

    .committed {
        position: absolute;
        top: 50%;
        left: 10%;
        font-size: 25px;
        font-weight: 600;
    }

    .pragmatic {
        position: absolute;
        top: 60%;
        left: 25%;
        font-size: 50px;
        font-weight: 600;
    }

    .energy {
        position: absolute;
        top: 15%;
        left: 35%;
        font-size: 50px;
        font-weight: 600;
    }

    .entrepreneurship {
        position: absolute;
        top: 80%;
        left: 15%;
        font-size: 30px;
        font-weight: 600;
    }


    /************** Smart capital MOBILE ************/

    #smart-capital {
        max-width: 100%;
        width: calc(100% - 48px);
        margin: 80px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .sc-cards-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;
        margin-bottom: 80px;
    }

    .sc-card {
        flex-direction: row;
        aspect-ratio: 0;
        align-items: center;
        padding: 40px 24px;
        text-align: left;
        height: 100%;
    }

    .sc-card img {
        width: 77px;
        height: auto;
    }

    p.sc-sub-title-bottom-text{
        margin: 0;
    }


    /* Partners mobile */

    #partners {
        width: calc(100% - 48px);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 35px;
    }

    #partners h2 {
        margin-bottom: 0px;
        text-align: center;
    }
    #partners h2 br {
        display: none;
    }

    .partner-right-section,
    .partner-left-section {
        display: flex;
        flex-direction: column;
        gap: 35px;
    }

    #contact-block {
        background-color: #87B16D1A;
        padding: 80px 0;
        margin: 80px auto 0;
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