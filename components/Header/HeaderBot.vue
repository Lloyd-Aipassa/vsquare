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


                                    <NuxtLink to="/contact" @click="Close">
                                        <li>
                                            <p>
                                                Contact
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

                                </div>
                            </Transition>

                        </ul>
                        <!-- <div class="elipse">
                            <svg class="el" viewBox="0 0 373 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="105" cy="344" r="344" transform="rotate(90 105 344)" fill="#F89A03"
                                    fill-opacity="0.1" />
                            </svg>
                            <svg class="social" width="100" height="51" viewBox="0 0 103 53" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3554_1383)">
                                    <path
                                        d="M1.37398 12.1933C0.126732 12.9039 -0.352919 14.4658 0.275834 15.7591L0.735763 16.7054L1.19569 17.6517C1.82445 18.945 3.34663 19.5278 4.67316 18.9798C7.52464 17.8021 12.0813 14.8729 18.1878 16.2678C18.5858 16.3588 18.9128 15.9498 18.7337 15.5814L15.7182 9.37846L12.8754 3.53037C12.6967 3.16323 12.176 3.16837 12.0009 3.53749C9.31979 9.19015 4.05546 10.6654 1.37398 12.1933Z"
                                        fill="#F89A03" />
                                    <path
                                        d="M10.5346 23.1509L9.61911 23.8025C9.1221 24.1562 8.43379 24.0387 8.08115 23.5406L3.78125 17.4635L6.49586 15.5312L10.7958 21.6084C11.1484 22.1069 11.0312 22.7973 10.5346 23.1509Z"
                                        fill="#F89A03" />
                                    <path
                                        d="M16.8347 10.8264C17.536 10.2558 17.6433 9.22313 17.0744 8.51979C16.5055 7.81645 15.4759 7.70882 14.7746 8.27939C14.0734 8.84996 13.966 9.88267 14.5349 10.586C15.1038 11.2893 16.1334 11.397 16.8347 10.8264Z"
                                        fill="#F89A03" />
                                    <path
                                        d="M24.5651 5.90869L19.6941 8.29074C19.4085 8.43039 19.0638 8.31131 18.9245 8.02488C18.7853 7.73845 18.904 7.39267 19.1896 7.25302L24.0606 4.87097C24.3462 4.73132 24.691 4.8504 24.8302 5.13683C24.9695 5.42326 24.8507 5.76904 24.5651 5.90869Z"
                                        fill="#F89A03" />
                                    <path
                                        d="M25.0066 13.1636C24.8741 13.2285 24.7171 13.2424 24.5668 13.1905L19.4429 11.4201C19.1423 11.3165 18.9826 10.9877 19.0863 10.6863C19.1897 10.3848 19.5175 10.2246 19.818 10.3286L24.9419 12.099C25.2425 12.2027 25.4023 12.5314 25.2985 12.8329C25.2468 12.9836 25.1392 13.0992 25.0066 13.1636Z"
                                        fill="#F89A03" />
                                    <path
                                        d="M17.3749 6.23549C17.2424 6.30038 17.0854 6.31422 16.9351 6.2624C16.6345 6.15874 16.4748 5.82998 16.5785 5.52852L18.3437 0.389377C18.4474 0.0879122 18.7748 -0.072315 19.0754 0.0317338C19.376 0.135387 19.5357 0.464149 19.432 0.765614L17.6668 5.90475C17.6151 6.05549 17.5074 6.17101 17.3749 6.23549Z"
                                        fill="#F89A03" />
                                    <path
                                        d="M19.6436 27.6175H23.1869V25.3474H19.6436V21.1763H23.364V18.9062H17.2051V34.7632H19.6436V27.6175Z"
                                        fill="#F89A03" />
                                    <path
                                        d="M28.2381 34.9921C30.9164 34.9921 32.2023 33.5556 32.2023 30.5168V23.1119C32.2023 20.0609 30.7894 18.6719 28.3927 18.6719C25.996 18.6719 24.5117 20.0573 24.5117 23.0938V30.5584C24.5117 33.5184 25.6686 34.9917 28.2381 34.9917V34.9921ZM26.9944 22.8726C26.9944 21.5303 27.4665 20.9 28.345 20.9C29.3343 20.9 29.7193 21.5959 29.7193 22.8548V30.8135C29.7193 32.2081 29.2952 32.7853 28.3477 32.7853C27.4685 32.7853 26.9944 32.1662 26.9944 30.8487V22.873V22.8726Z"
                                        fill="#F89A03" />
                                    <path d="M40.4224 32.5766H36.4463V18.9062H34.0078V34.7632H40.2149L40.4224 32.5766Z"
                                        fill="#F89A03" />
                                    <path d="M47.8306 32.5766H43.8545V18.9062H41.416V34.7632H47.6231L47.8306 32.5766Z"
                                        fill="#F89A03" />
                                    <path
                                        d="M52.2844 34.9921C54.9627 34.9921 56.2486 33.5556 56.2486 30.5168V23.1119C56.2486 20.0609 54.8357 18.6719 52.4386 18.6719C50.0415 18.6719 48.5576 20.0573 48.5576 23.0938V30.5584C48.5576 33.5184 49.7145 34.9917 52.284 34.9917L52.2844 34.9921ZM51.0407 22.8726C51.0407 21.5303 51.5128 20.9 52.3913 20.9C53.3806 20.9 53.7655 21.5959 53.7655 22.8548V30.8135C53.7655 32.2081 53.3415 32.7853 52.394 32.7853C51.5148 32.7853 51.0407 32.1662 51.0407 30.8487V22.873V22.8726Z"
                                        fill="#F89A03" />
                                    <path
                                        d="M61.8543 34.7628C62.3264 31.3446 63.0156 27.0466 63.3828 23.7146H63.4274C63.7654 26.9777 64.3851 31.207 64.8312 34.7628H67.3186L69.6549 18.9062H67.19C66.8248 22.4989 66.3621 27.3765 66.1755 30.4731H66.1254C65.8043 26.9754 65.1468 22.4973 64.6774 18.9062H62.3055C61.8567 22.3802 61.1963 27.2262 60.8338 30.5831H60.7893C60.6682 27.589 60.1806 22.328 59.8154 18.9062H57.2227L59.3878 34.7628H61.8543Z"
                                        fill="#F89A03" />
                                    <path
                                        d="M77.6753 34.9946C80.313 34.9946 81.4407 33.422 81.4407 30.9201V18.9062H78.9995V30.9704C78.9995 32.0441 78.687 32.7847 77.7199 32.7847C76.7527 32.7847 76.3984 32.126 76.3984 30.9676V18.9062H73.96V30.9284C73.96 33.6309 75.1622 34.9946 77.6753 34.9946Z"
                                        fill="#F89A03" />
                                    <path
                                        d="M86.4472 34.9896C89.3973 34.9896 90.183 32.858 90.183 30.6085C90.183 27.9555 89.458 26.9367 87.0921 25.1818C85.7025 24.1618 85.4903 23.6131 85.4903 22.4931C85.4903 21.4423 85.6993 20.7512 86.4918 20.7512C87.2842 20.7512 87.4873 21.4194 87.4873 22.5236V23.3049H89.9049V22.4579C89.9049 20.7377 89.4545 18.6512 86.5363 18.6484C83.6829 18.6457 83.0522 20.7547 83.0522 22.8444C83.0522 25.1916 83.961 26.0529 85.6622 27.4C87.358 28.7416 87.724 29.2705 87.724 30.9749C87.724 32.0047 87.4779 32.9075 86.5277 32.9075C85.5774 32.9075 85.2481 32.2503 85.2481 31.0706V30.0906H82.8096V31.0314C82.8096 33.1203 83.5223 34.9892 86.4472 34.9892V34.9896Z"
                                        fill="#F89A03" />
                                    <path
                                        d="M96.8863 8.49219H26.6793V10.0747H96.8863C99.3875 10.0747 101.422 12.1157 101.422 14.6243V39.0216C101.422 41.5303 99.3875 43.5713 96.8863 43.5713H63.7753C62.579 43.5713 61.4544 44.0385 60.6087 44.8867L54.3886 51.1253C54.2028 51.3112 53.9563 51.4137 53.694 51.4137C53.4317 51.4137 53.1847 51.3112 52.9993 51.1249L46.7793 44.8863C45.9332 44.0381 44.8086 43.5709 43.6126 43.5709H10.5017C8.00046 43.5709 5.9655 41.5299 5.9655 39.0212V25.4415H4.3877V39.0212C4.3877 42.4026 7.13031 45.1534 10.5017 45.1534H43.6122C44.3869 45.1534 45.1155 45.456 45.6634 46.0055L51.8834 52.2441C52.367 52.7291 53.01 52.9962 53.694 52.9962C54.3779 52.9962 55.0209 52.7291 55.5045 52.2441L61.7246 46.0055C62.2725 45.456 63.001 45.1534 63.7757 45.1534H96.8866C100.258 45.1534 103.001 42.4026 103.001 39.0212V14.6243C103.001 11.243 100.258 8.49219 96.8866 8.49219H96.8863Z"
                                        fill="#F89A03" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3554_1383">
                                        <rect width="103" height="53" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <div class="bottom-el">
                                <div class="social-container">
                                    <svg class="social-2" width="24" height="25" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17 2.03125H7C4.23858 2.03125 2 4.26983 2 7.03125V17.0312C2 19.7927 4.23858 22.0312 7 22.0312H17C19.7614 22.0312 22 19.7927 22 17.0312V7.03125C22 4.26983 19.7614 2.03125 17 2.03125Z"
                                            stroke="#F89A03" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M15.9997 11.3976C16.1231 12.2299 15.981 13.0799 15.5935 13.8267C15.206 14.5735 14.5929 15.1791 13.8413 15.5573C13.0898 15.9356 12.2382 16.0672 11.4075 15.9336C10.5768 15.7999 9.80947 15.4077 9.21455 14.8128C8.61962 14.2179 8.22744 13.4505 8.09377 12.6199C7.96011 11.7892 8.09177 10.9375 8.47003 10.186C8.84829 9.4345 9.45389 8.82139 10.2007 8.43389C10.9475 8.04639 11.7975 7.90423 12.6297 8.02765C13.4786 8.15353 14.2646 8.54911 14.8714 9.15595C15.4782 9.76279 15.8738 10.5487 15.9997 11.3976Z"
                                            stroke="#F89A03" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M17.5 6.53125H17.51" stroke="#F89A03" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <a href="https://www.instagram.com/rocketsourcers">
                                        <p>Instagram</p>
                                    </a>
                                </div>
                                <div class="social-container">
                                    <svg class="social-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                                            stroke="#F89A03" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M6 9H2V21H6V9Z" stroke="#F89A03" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                                            stroke="#F89A03" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <a href="https://www.linkedin.com/company/rocketsourcers">
                                        <p>Linkedin</p>
                                    </a>
                                </div>
                            </div>
                        </div> -->
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
const OpenDiensten = () => Diensten.value = true
const OpenOverOns = () => OverOns.value = true
const CloseMain = () => Main.value = false
const CloseDiensten = () => Diensten.value = false
const CloseOverOns = () => OverOns.value = false
const OpenMain = () => Main.value = true

const props = defineProps({
    Link: String,
})

// console.log(Link)
</script>



<style scoped>
.header-container {
    background-color: #fff;
    height: 96px;
    display: flex;
    margin: 0 auto;
    position: relative;
    z-index: 1000;
}

.container {
    position: relative;
    height: 100%;
    padding: 0 200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

        padding: 0 24px;

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

    .diensten-content {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 5;
        background-color: #fff;
    }

    .elipse {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    svg.el {
        position: absolute;
        bottom: 0;
        width: 100% !important;
        pointer-events: none;
    }

    svg.social {
        width: 100px !important;
        margin-bottom: 17px;
        align-self: center;
    }

    svg.social-2 {
        margin-top: -2px;
    }

    .bottom-el {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
        margin-bottom: 12px;
    }

    .social-container {
        display: flex;
        gap: 5px;
    }

    .social-container p {
        padding-top: 2px;
    }

    .bottom-el img {
        width: 24px !important;
        display: flex;
        align-items: center;
        justify-content: center;
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