<template>
    <section id="contact">
        <h2>Interested?</h2>
        <h3>PLEASE REACH OUT</h3>
        <ContactBlock />
    </section>
</template>


<style scoped>
#contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 100%;
    /* max-width: 500px; */
    background: var(--color-gradient);
    background: linear-gradient(266.72deg, #596651 0%, #899284 99.03%);
    padding: 72px;
    align-self: flex-start;
    height: 400px;
}

h2 {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--color-light-green);
}

h3 {
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    color: #fff;
    margin-bottom: 24px;
}


@media screen and (max-width: 720px) {
    #contact {
        width: 100%;
        padding: 40px;
        margin-bottom: 40px;
        height: 385px;
    }

    h3 {
        font-size: 28px;
        font-weight: 800;
        line-height: 28px;
        color: #fff;
        margin-bottom: 20px;
    }

}
</style>