<template>
    <div>
        <section class="hero">
            <Hero :ButtonTekst="ButtonTekst" :Link="Link" :HeroContent="HeroContent">
                <ul class="bullets">
                    <li>
                        <p>There is a growing momentum for people to switch from animal-based to more sustainable,
                            plant-forward
                            diets.To make this switch, most potential flexitarians need more and more tasty and
                            conveniently
                            available restaurants and deliverers to seduce them.</p>
                    </li>
                </ul>
            </Hero>
        </section>
        <section class="vegitalian animatie-3">
            <CardsWhiteCard :ButtonTekst="ButtonTekst2" :Link="Link2" :WhiteCard="WhiteCard" :isActive="isActive" />
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
                        <p>Strong track record in scale up environments (e.g. Student Hotel) and management of
                            hospitality
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
                        <p>Strong partnerships with Wageningen University and Sandenburg Concept Creation (that
                            supported
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
                <CardsTeamCard :cardTeam="cardTeam" />
                <CardsTeamCard :cardTeam="cardTeam2" />
                <CardsTeamCard :cardTeam="cardTeam3" :isActive="isActive" />
                <CardsTeamCard :cardTeam="cardTeam4" />
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
            <p class="sc-sub-title">V-SQUARE is an impact-driven collective that conjoins the required experience,
                manpower,
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
                    <p>Experienced in retail, food service, real estate, food & agri, industry, TIC and business
                        services
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
            <img src="/vegitalian/CinnamonHand.webp" alt="cup cake">
        </section>
    </div>
</template>

<script setup>

// ** Header button  **
const ButtonTekst = 'Questions or more info'
const Link = '/contact'


// ** Hero **
const HeroContent = [{
    Image: "/hero/header-home.webp",
    MobImage: "/hero/vs-hero-mobile.webp",
    Title: 'THE BEST HEALTHY AND SUSTAINABLE FOOD ON EVERY CORNER',
}]

// ** White card button  **
const ButtonTekst2 = 'More about vegitalian '
const Link2 = '/vegitalian-project'
const isActive = ref(true)

// ** White card **
const WhiteCard = [{
    Title: 'THE BEST HEALTHY AND SUSTAINABLE FOOD ON EVERY CORNER',
    p: '<b>Current out of home (and to the home) options provide for sub-optimal offerings and lack scale, limiting their potential impact</b><br><br> V-SQUARE aims to invest in the high potential plant-forward restaurant chains and helps them scale up faster and makes their offering even healthier, tastier and more conveniently available at many more places. This way radically more people will be seduced to eat less and less animal-based food and as a result, we will have significant positive impact and can benefit from a huge market opportunity',
}]

// ** Team **
const cardTeam = [{
    Name: "Felix Hillen",
    Image: "/home/team/Felix.webp",
    p: 'Throughout my very diverse working life I have been involved in and responsible for several high-growth trajectories of companies in their start- and scale-up phase. In my last adventure at The Student Hotel, we grew through start-up, with a new product and business model, to a scale-up. Within 9 years we have developed a 27 hotels portfolio, with 11,000 rooms, in 7 countries, run by 750 people.<br><br> In a previous role, in a fast growing technology company, we have not been successful in the scale-up phase. The lessons learned proved to be very helpful at TSH, as well as in my role at Eden, managing the company through growth as well as through the credit crisis impact.<br><br> Further relevant experiences are in fund structuring, technology, investment management and in corporate finance transactions. And I’m a train diplomat',
}]

const cardTeam2 = [{
    Name: "Lucas Rijckmans",
    Image: "/home/team/Lucas.webp",
    p: 'My last position was Chief Corporate Services at The Student Hotel (“TSH”). In the 6 years I have worked at TSH I have supported the growth of TSH from a portfolio of 2 hotels open and 1 under construction to a portfolio of 23 hotels (11 under construction) in 7 jurisdictions and 750 staff<br><br> As CCS I was end responsible for the corporate backbone of TSH. I have built and managed various specialized teams such as Legal & Compliance, Treasury & Banking, Risk Management, CSR and Procurement Adding this to my previous experience as a Lawyer (Banking & Finance) and Corporate Banker I can support scale up companies in their growth at various areas of their business.',
}]

const cardTeam3 = [{
    Name: "Markus Konings",
    Image: "/home/team/Arjan.webp",
    p: 'In 1998 I founded Sandenburg Concept Creation. Sandenburg develops, designs and implements successful customer experiences for retail and foodservice clients and mixed-use projects.<br><br>Sandenburg works for entrepreneurial brands like Landmarkt, Eazie, Bagels & Beans and Tony’s Chocolonely. We also work for well-established brands like Hema, Spar, Albert Heijn, Vodafone, Ziggo, Unilever, Total, Lely, Athlon and Jacobs Douwe Egberts. Over recent years, we have devised and executed many appealing and relevant customer experience concepts together with our national and international clients, including businesses in the food- and retail sector, real estate and experience centres.<br><br>Early 2020 Sandenburg acquired ‘DST – het experience bureau’, an Amsterdam-based experience development and design agency, creating brand experience centres, visitor centres, themed attractions and educational projects. DST is well-known as the experience concept developer of Heineken Experience in Amsterdam.<br><br>As a serial investor, I invested over the last years in Mockamore, the Food Factory and On Top  (25+ locations food service concept), Amstel1, Holland Design & Gifts, Amstory and the award winning Umenz. In 2019 I attended the IESE Advanced Management Program, aiming at achieving visionary leadership and excellence in execution.<br><br>I am passionate about food innovation and have an extensive network in the food and retail business which will help to accelerate to develop a sustainable food concept. Further relevant experiences are operational management in food service, real estate and construction management.',
}]
const cardTeam4 = [{
    Name: "Arjan Witteveen",
    Image: "/home/team/Marcus.webp",
    p: 'Over 37 years of experience in Finance of which >15 years as an entrepreneur and investor.<br><br>As a Certified public accountant I worked as a public auditor for KPMG, CFO for United Parcel Service Nederland, Douwe Egberts Coffee Systems and DPD Nederland BV, being responsible for Finance, ICT and Legal.<br><br>As an Investor I invested in several companies. Together with Markus we grew a food service business (Mockamore) with 25+  locations in the Benelux and Middle East. Other investments in retail chains in Poland and China, installation company, innovative LED light concept, international wholesale in home décor and gifts, wholesale in packaging and packaging machines, several buying companies in the Far East.<br><br>I supported companies in different phases as start-up, scale-up and turn-around. Daily financial management, process/result improvement and fund raising. The last 4 years I joined, as a Partner, a boutique in Corporate Finance and M&A<br><br>Key words: Entrepreneurial CFO, focus on results, move!, change, accountability, communication and fun!',
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
    tl3.fromTo('.animate-words', { opacity: '0', y: '100' }, { opacity: '1', y: '0', delay: 0.4, stagger: 0.3, duration: 1.3 });

})

</script>

<style scoped>
.hero {
    padding: 0 0 130px 200px;
    /* height: 100vh; */
}

ul.bullets {
    list-style-type: none;
    padding-left: 0px;
}

ul.bullets p {
    max-width: 817px;
    margin: 24px 0 40px;
}

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
    overflow-y: visible;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1068px;
    margin: 0 auto 80px;
    gap: 24px;
    row-gap: 24px;
}

#team h2 {
    text-align: center;
    margin-bottom: 8px;
}

p.team-sub-title {
    max-width: 913px;
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
    align-items: flex-start;
    justify-content: center;
    padding-left: 48px;
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
    background-repeat: no-repeat;
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
    .hero {
        padding: 18px 0 80px 96px;
        height: fit-content;
    }

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

    /************** Hero ************/
    .hero {
        padding: 0;
        height: fit-content;
    }

    ul.bullets p {
        margin: 24px 0;
        width: 100%;
    }

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
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 1100px;
        margin: 0 auto 80px;
        gap: 4px;
    }

    .team-card {
        width: 100%;
    }

    .team-card-content {
        width: 50%;
        aspect-ratio: 1;
    }

    .team-card img {
        width: 50%;
        height: auto;
    }

    p.team-sub-title {
        margin-bottom: 40px;
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
        right: 15%;
        font-size: 40px;
        font-weight: 600;
    }

    .frank {
        position: absolute;
        top: 10%;
        left: 15%;
        font-size: 30px;
        font-weight: 600;
    }

    .simple {
        position: absolute;
        top: 35%;
        left: 30%;
        font-size: 45px;
        font-weight: 600;
    }

    .hands-on {
        position: absolute;
        top: 23%;
        left: 22%;
        font-size: 25px;
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
        top: 65%;
        left: 45%;
        font-size: 35px;
        font-weight: 600;
    }

    .energy {
        position: absolute;
        top: 15%;
        left: 45%;
        font-size: 40px;
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

    p.sc-sub-title-bottom-text {
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
        padding: 0 0px 10px;
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
        padding: 00px;
    }



}
</style>