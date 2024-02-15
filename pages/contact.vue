<template>
    <div>
        <section aria-label="Contact pagina">
            <div id="contact">
                <h1>CONTACT?</h1>
                <div class="contact-container">
                    <div class="form">
                        <form id="contact-form" ref="form" @submit.prevent="sendEmail">
                            <input type="hidden" name="contact_number" />
                            <label>Name</label>
                            <input type="text" name="name" id="name-form" required />
                            <label>E-mail</label>
                            <input type="email" v-model="email" name="email" required />
                            <label>Phone number</label>
                            <input type="text" name="phone" required />
                            <label>Organisation</label>
                            <input type="text" name="company" id="organisatie" required />
                            <label>Message</label>
                            <textarea rows="5" name="message"></textarea><br>
                            <div class="button">
                                <input type="submit" value="SEND" />
                                <img src="/buttons/arrow.svg" alt="">
                            </div>
                        </form>
                        <p v-if="verzonden"> Je bericht is verzonden :) </p>
                    </div>
                    <div class="cards">
                        <div class="card">
                            <img src="/contact/adres.svg" width="46" height="56" alt="">
                            <p>Keizersgracht 649 <br> 1017 DT Amsterdam</p>
                        </div>
                        <div class="card">
                            <img src="/contact/tel.svg" width="46" height="56" alt="">
                            <p>+31 63 02 61 684 <br><span>Monday to Friday 09:00 - 17:00</span></p>
                        </div>
                        <div class="card">
                            <img src="/contact/envelop.svg" width="46" height="56" alt="">
                            <p>lucas@v-square.eu<br><span>Response within 24 hours.</span></p>
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
    margin: 0 auto;
    padding: 0 200px 80px;
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
    max-width: 900px;
    border: 1px solid var(--color-light-green);
    /* border-radius: 3px; */
    padding: 14px;
    box-sizing: border-box;
    margin-bottom: 5px;
    font-size: 16px;
}

.button {
    margin-top: 15px;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.button img {
    position: absolute;
    top: 50%;
    right: 40px;
}

form input[type="submit"] {

    width: 30%;
    border: none;
    padding: 15px 40px;
    box-sizing: border-box;
    background: var(--color-gradient);
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: translateY(0);
    text-align: left;
    margin: 15px 0 0 auto;
}

form input[type="submit"]:hover {
    color: var(--color-light-green);
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
    color: var(--color-green);
    font-size: 14px;
}





@media screen and (max-width: 1439px) {
    #contact {
        margin: 0 auto;
        padding: 0 96px 80px;
        background-color: #87B16D1A;
    }

    .contact-container {
        display: flex;
        gap: 20px;
    }
}

@media screen and (max-width: 1239px) {
    #contact {
        margin: 0 auto;
        padding: 0 96px 80px;
        background-color: #87B16D1A;
    }

    .contact-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .form {
        width: 100%;
        background-color: #fff;
        align-self: stretch;
        box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 48px 64px;
        z-index: 5;
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


@media screen and (max-width: 720px) {

    #contact {
        margin: 0 auto 50px;
        margin: 0;
        padding: 0;
        background-color: #87B16D1A;
        flex-direction: column;
    }

    .contact-container {
        margin: 0 auto 0px;
        width: calc(100% - 48px);
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    #contact {
        margin: 0 auto;
        padding: 0 0 50px;
        background-color: #87B16D1A;
    }

    .contact-container {
        display: flex;
        gap: 20px;
    }


    h1 {
        font-size: 31px;
        font-weight: 900;
        line-height: 110%;
        max-width: 390px;
        margin-left: 24px;
        padding: 66px 0 24px;
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
        width: 100%;

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

    .button {
        margin-top: 0px;
        position: relative;
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .button img {
        position: absolute;
        top: 50%;
        right: 40px;
    }

}
</style>