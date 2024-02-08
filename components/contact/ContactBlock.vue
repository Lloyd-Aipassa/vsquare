<template>
    <div id="contact-buttons">
        <NuxtLink class="meer-info" to="/vegitalian-project"> Questions or more info
            <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M39.7071 8.70711C40.0976 8.31659 40.0976 7.68342 39.7071 7.2929L33.3431 0.928935C32.9526 0.538411 32.3195 0.538411 31.9289 0.928935C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM-8.74228e-08 9L39 9L39 7L8.74228e-08 7L-8.74228e-08 9Z"
                    fill="#BBD9A8" />
            </svg>
        </NuxtLink>
        <NuxtLink class="meer-info" to="/contact"> Want to team up?
            <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M39.7071 8.70711C40.0976 8.31659 40.0976 7.68342 39.7071 7.2929L33.3431 0.928935C32.9526 0.538411 32.3195 0.538411 31.9289 0.928935C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM-8.74228e-08 9L39 9L39 7L8.74228e-08 7L-8.74228e-08 9Z"
                    fill="#BBD9A8" />
            </svg>
        </NuxtLink>
        <NuxtLink class="meer-info" to="/contact"> Download our brochure
            <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M39.7071 8.70711C40.0976 8.31659 40.0976 7.68342 39.7071 7.2929L33.3431 0.928935C32.9526 0.538411 32.3195 0.538411 31.9289 0.928935C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM-8.74228e-08 9L39 9L39 7L8.74228e-08 7L-8.74228e-08 9Z"
                    fill="#BBD9A8" />
            </svg>
        </NuxtLink>
    </div>
</template>

<style scoped>
#contact-buttons {
    max-width: 300px;
}

a.meer-info {
    z-index: 3;
    position: relative;
    border: 1px solid var(--color-light-green);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 18px 24px;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 15px;
}

a.meer-info:hover {
    color: var(--color-light-green);
}

@media screen and (max-width: 600px) {}</style>