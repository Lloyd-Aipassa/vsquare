<template>
    <div class="footer-top">
        <ul>
            <li class="footer-title">
                V-SQUARE
            </li>
            <li>
                Keizersgracht 649
            </li>
            <li>
                1017 DT Amsterdam
            </li>
            <li>
                +31 63 02 61 684
            </li>
            <li>
                lucas@v-square.eu
            </li>
        </ul>
        <ul>
            <li class="footer-title">
                Menu
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

li.footer-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 34px;
}

li a {
    font-size: 16px;
    font-weight: 100;
    line-height: 34px;
    color: #fff;
    text-decoration: none;
}

.footer-bottom {
    height: 60px;
    padding: 0 200px 0 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.footer-bottom p {
    font-size: 12px;
    font-weight: 600;
    line-height: 34px;
    color: var(--color-green);
}
</style>