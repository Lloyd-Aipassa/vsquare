<template>
    <div class="footer-top">
        <ul>
            <li>
                <p class="footer-title"> V-SQUARE</p>
            </li>
            <li>
                <p>Keizersgracht 649</p>
            </li>
            <li>
                <p> 1017 DT Amsterdam</p>
            </li>
            <li>
                <p>+31 63 02 61 684</p>
            </li>
            <li>
                <p> lucas@v-square.eu</p>
            </li>
        </ul>
        <ul>
            <li>
                <p class="footer-title">Menu</p>
            </li>
            <li>
                <NuxtLink to="/">
                    Home
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contact">
                    Vegitalian
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contact">
                    Contact
                </NuxtLink>
            </li>
        </ul>
    </div>
    <div class="footer-bottom">
        <p>© 2024 V-SQUARE</p>
    </div>
</template>

<style scoped>
.footer-top {
    background: #8D9986;
    padding: 50px 0 50px 200px;
    display: flex;
    gap: 260px;
}


ul {
    list-style: none;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

li p.footer-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: #fff;
}

li a,
li p {
    display: block;
    font-size: 16px;
    font-weight: 200;
    line-height: 16px;
    color: #fff;
    text-decoration: none;
}

li a:hover {
    color: var(--color-light-green);
}

.footer-bottom {
    height: 60px;
    padding: 0 200px 0 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
}

.footer-bottom p {
    font-size: 12px;
    font-weight: 600;
    line-height: 34px;
    color: var(--color-green);
}

@media screen and (max-width: 1440px) {
    .footer-top {
        background: #8D9986;
        padding: 50px 0 50px 96px;
        gap: 260px;
    }
}

@media screen and (max-width: 1240px) {}

@media screen and (max-width: 720px) {
    .footer-top {
        padding: 70px 0;
        flex-direction: column;
        text-align: center;
        gap: 50px;
    }

    .footer-bottom {
        height: 48px;
        padding: 0 0 14px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>