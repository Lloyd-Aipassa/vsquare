<template>
    <div>
        <section aria-label="Contact pagina">
            <div id="contact">
                <h1>PREFER REAL CONTACT?</h1>
                <div class="contact-container">
                    <div class="form">
                        <form id="contact-form" ref="form" @submit.prevent="sendEmail">
                            <input type="hidden" name="contact_number" />
                            <label>Naam</label>
                            <input type="text" name="name" id="name-form" required />
                            <label>E-mail</label>
                            <input type="email" v-model="email" name="email" required />
                            <label>Telefoonnummer</label>
                            <input type="text" name="phone" required />
                            <label>Organisatie</label>
                            <input type="text" name="company" id="organisatie" required />
                            <label>Bericht</label>
                            <textarea rows="5" name="message"></textarea><br>
                            <input type="submit" value="Verstuur" />
                        </form>
                        <p v-if="verzonden"> Je bericht is verzonden :) </p>
                    </div>
                    <div class="cards">
                        <div class="card">
                            <!-- <img src="/contact/adres.svg" width="46" height="56" alt=""> -->
                            <p>Keizersgracht 649 <br> 1017 DT Amsterdam</p>
                        </div>
                        <div class="card">
                            <!-- <img src="/contact/tel.svg" width="46" height="56" alt=""> -->
                            <p>+31 63 02 61 684 <br><span>Maandag t/m vrijdag 09.00 - 17.00</span></p>
                        </div>
                        <div class="card">
                            <!-- <img src="/contact/envelop.svg" width="46" height="56" alt=""> -->
                            <p>lucas@v-square.eu<br><span>Reactie binnen 24 uur</span></p>
                        </div>
                        <div class="card">
                            <!-- <img src="/contact/social.svg" width="99" height="45" alt=""> -->
                            <div class="content-last-card">
                                <span>
                                    <!-- <img src="/contact/linkedin.svg" width="24" height="24" alt="Linkin"> -->
                                    <a href="https://www.linkedin.com/company/rocketsourcers">
                                        <p>Linkedin</p>
                                    </a>
                                </span>

                                <span>
                                    <!-- <img src="/contact/instagram.svg" width="24" height="24" alt="Instagram"> -->
                                    <a href="https://www.instagram.com/rocketsourcers">
                                        <p>Instagram</p>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';
export default {
    data() {
        return {
            email: '',
            verzonden: false
        }
    },

    methods: {
        sendEmail() {
            emailjs.sendForm('service_nepyjwa', 'template_6c06aw9', this.$refs.form, '_6uybFmlII80xQ-5B')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                    this.email = '' // fix clearing email field bug
                    this.verzonden = true
                    this.$refs.form.reset(); // This will clear that form
                    // this.email= 'hi'
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        }
    }
}
</script>

<style scoped>
h1 {
    max-width: 850px;
    text-transform: uppercase;
    padding: 80px 0 24px;
}


#contact {
    margin: 0 auto 50px;
    padding: 0 200px;
    background-color: #87B16D1A;
}

.contact-container {
    display: flex;
    gap: 20px;
}



/*********************form***********/

.form {
    width: 67%;
    background-color: #fff;
    align-self: stretch;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 48px 64px;
    z-index: 5;
}

form label {
    display: block;
    margin: 10px 0 5px;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
    font-family: "inter", sans-serif;
}

form input[type="text"],
form input[type="email"],
form textarea {
    width: 100%;
    max-width: 500px;
    border: 1px solid var(--color-light-green);
    /* border-radius: 3px; */
    padding: 14px;
    box-sizing: border-box;
    margin-bottom: 5px;
    font-size: 16px;
}

form input[type="submit"] {
    width: 30%;
    border: none;
    padding: 15px;
    box-sizing: border-box;
    background-color: var(--color-orange);
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: translateY(0);
    margin-top: 15px;
}

form input[type="submit"]:hover {
    transform: translateY(-2px);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
}

form input[type="submit"]:active {
    transform: translateY(0);
    box-shadow: none;
}



.cards {
    width: 33%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-self: stretch;
}

.card {
    text-align: center;
    background-color: #fff;
    min-height: 166.2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 5;
}

.card span {
    color: var(--color-orange);
}

.content-last-card {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 10px;
}

.content-last-card span {
    margin-top: 10px;
    display: flex;
    align-items: bottom;
    gap: 5px;
}

.content-last-card p {
    padding-top: 2px;
}

.content-last-card a {
    text-decoration: none;
}


#faq {
    position: relative;
    z-index: 5;
    max-width: 1200px;
    margin: 0 auto 50px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
}

#faq img {
    margin: 0 auto -58px;
}

@media screen and (max-width: 1439px) {
    #contact {
        max-width: 1080px;
        margin: 0 auto 50px;
        display: flex;
        gap: 20px;
    }

    .hero-orange-left {
        position: absolute;
        top: 450px;
        left: 0;
        width: 10vw;
    }
}

@media screen and (max-width: 1239px) {
    #contact {
        max-width: 780px;
        margin: 0 auto 50px;
        display: flex;
        gap: 20px;
    }

    .hero-orange-left {
        position: absolute;
        top: 360px;
        left: 0;
        width: 9vw;
    }


    #faq {
        max-width: 780px;
    }

    #faq img {
        margin: 0 auto -56px;
        width: 90%;
        height: auto;
        text-align: center;
    }
}


@media screen and (max-width: 720px) {

    #contact {
        margin: 0 auto 50px;
        margin: 0;
        padding: 0;
        background-color: #87B16D1A;
        flex-direction: column;
    }

    .contact-container {
        margin: 0 auto 50px;
        width: calc(100% - 48px);
        display: flex;
        flex-direction: column;
        gap: 20px;
    }


    h1 {
        font-size: 31px;
        font-weight: 900;
        line-height: 110%;
        max-width: 390px;
        margin-left: 24px;
    }




    .form {
        width: 100%;
    }

    .form {


        padding: 48px 24px;
    }

    form label {
        margin: 15px 0 5px;
        font-family: "inter", sans-serif;
    }

    form input[type="submit"] {
        margin-top: 20px;
        width: 50%;

    }

    .cards {
        width: 100%;
        margin: 0 auto;
    }

    .content-last-card {
        margin-top: 10px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        gap: 20px;
    }

}
</style>