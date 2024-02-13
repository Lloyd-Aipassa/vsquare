<template>
    <div class="header-container">
        <div class="container">
            <NuxtLink to="/" aria-label="knop terug naar de homepage">
                <img src="/header/LogoVSquare.svg" alt="">
            </NuxtLink>
            <nav class="nav-desktop" aria-label="navigatie header">

                <ul>
                    <li>
                        <NuxtLink to="/">
                            <p>
                                Home
                            </p>
                        </NuxtLink>

                    </li>

                    <li>
                        <NuxtLink to="/vegitalian-project">
                            <p>
                                Vegitalian Project
                            </p>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">
                            <p>
                                Contact
                            </p>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <!--*****************************
            ***********/*Mobiel*/************
            ***************************** -->

            <nav class="nav-mobile" aria-label="navigatie mobiel">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" @click="Menu"
                    aria-label="hamburger knop">
                    <path d="M4 16H28" stroke="#8D9986" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4 8H28" stroke="#8D9986" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4 24H28" stroke="#8D9986" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>


                <Transition name="slide">
                    <div class="slider" v-if="Slider">
                        <ul>
                            <Transition name="fade">
                                <div class="main-content" v-if="Main">
                                    <li>
                                        <span>
                                            <p>
                                                Menu
                                            </p>

                                        </span>
                                        <div class="close" @click="Close">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </li>
                                    <NuxtLink to="/" @click="Close">
                                        <li>
                                            <p>
                                                Home
                                            </p>
                                        </li>
                                    </NuxtLink>

                                    <NuxtLink to="/vegitalian-project" @click="Close">
                                        <li>
                                            <p>
                                                Vegitalian Project
                                            </p>
                                        </li>
                                    </NuxtLink>

                                    <NuxtLink to="/contact" @click="Close">
                                        <li>
                                            <p>
                                                Contact
                                            </p>
                                        </li>
                                    </NuxtLink>
                                </div>
                            </Transition>
                        </ul>
                    </div>
                </Transition>
            </nav>
        </div>
    </div>
</template>

<script setup>
let Slider = ref(false)
const Main = ref(true)
const Diensten = ref(false)
const OverOns = ref(false)
const Menu = () => Slider.value = true
const Close = () => Slider.value = false
// const OpenDiensten = () => Diensten.value = true
// const OpenOverOns = () => OverOns.value = true
// const CloseMain = () => Main.value = false
// const CloseDiensten = () => Diensten.value = false
// const CloseOverOns = () => OverOns.value = false
// const OpenMain = () => Main.value = true

const props = defineProps({
    Link: String,
})

// console.log(Link)
</script>



<style scoped>
.header-container {
    background-color: #fff;
    /* height: 96px; */
    display: flex;
    margin: 0 auto;
    position: relative;
    z-index: 1000;
    margin-bottom: -20px;
}

.container {
    position: relative;
    height: 100%;
    padding: 20px 200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* Img niet goed gesneden aan de onderkant */
.container img {
    margin-bottom: -8px;

}

.nav-desktop ul {
    display: flex;
    list-style: none;
    gap: 60px;
}

a {
    text-decoration: none;

}

a p {
    text-decoration: none;
    font-weight: 300;
    color: #000;
}

p {
    font-weight: 300;
}



a:hover p {
    color: var(--color-orange);
}

p:hover p {
    color: var(--color-orange);
}

.diensten-container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 20px;
    margin-bottom: -20px;
}

.diensten-container:hover .drop-down {
    display: flex;
}

.diensten-container:hover svg {
    transform: rotate(180deg);
}

.drop-down {
    display: none;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translatex(-50%);
    background-color: #fff;
    width: 255px;
    /* height: 140px; */
    padding: 40px;
    flex-direction: column;
    /* justify-content: center; */
    gap: 34px;
    border-radius: 8px;
    box-shadow: 2px 2px 14px 0px rgba(0, 0, 0, 0.10);
}




.nav-mobile {
    display: none;
}

@media screen and (max-width: 1440px) {
    .container {

        padding: 0 96px;

    }

    .nav-desktop ul {
        gap: 40px;
    }
}

@media screen and (max-width: 1239px) {
    .container {
        max-width: 785px;
    }

    img {
        width: 180px;
    }

    .nav-desktop ul {
        display: flex;
        list-style: none;
        gap: 18px;
        /* gap: 20px; */
    }

    ul {
        display: flex;
        list-style: none;
    }

    a p {
        text-decoration: none;
        font-size: 14px;
    }
}


/********* Mobiel **************/

@media screen and (max-width: 720px) {
    header {
        height: 75px;
    }



    .nav-mobile {
        display: block;
    }

    .nav-mobile img {
        width: 24px;
    }

    svg.logo-rs {
        width: 180px;
        height: 77px;
    }

    .nav-mobile .slider img {
        width: 22px;
        align-self: center;
    }

    .nav-mobile .slider svg.close-button {
        padding-top: 10px;
        width: 34px;
    }

    .nav-desktop {
        display: none;
    }

    .container {
        padding: 16px 24px 0;
    }



    .container img {
        margin-bottom: 8px;
        width: 153px;
    }

    .slider {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 99999;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: var(--color-gradient);
        padding: 0 30px;
    }

    .slider p {
        color: #fff !important;
    }

    .slider span p {
        color: var(--color-orange);
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px;
        text-transform: uppercase;
    }

    .slider ul {
        display: flex;
        flex-direction: column;
    }

    .slider li {
        border-bottom: 1px solid #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 60px 0 10px;
    }

    .close p {
        color: var(--color-orange);
    }

}

@media screen and (max-width: 400px) {
    .slider li {
        height: 70px;
    }
}

@media screen and (max-width: 350px) {
    .slider li {
        height: 50px;
    }
}


/* animatie mobile menu */
.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}



.fade-enter-from {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}

.fade-leave-from {
    opacity: 1;
}

.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.7s ease;
}

/* color active links in nav */

.router-link-exact-active p {
    color: var(--color-orange);
    font-weight: 600;
}
</style>