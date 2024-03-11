<template>
    <div id="contact-buttons">
        <NuxtLink class="meer-info" to="/contact"> Questions or more info
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
        <!-- <NuxtLink class="meer-info" to="/contact"> Download our brochure
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M23 15.6667V20.5556C23 21.2039 22.7425 21.8256 22.284 22.284C21.8256 22.7425 21.2039 23 20.5556 23H3.44444C2.79614 23 2.17438 22.7425 1.71596 22.284C1.25754 21.8256 1 21.2039 1 20.5556V15.6667M5.88889 9.55556L12 15.6667M12 15.6667L18.1111 9.55556M12 15.6667V1"
                    stroke="#BBD9A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </NuxtLink> -->
    </div>
</template>

<style scoped>
a.meer-info {
    z-index: 3;
    position: relative;
    border: 1px solid var(--color-light-green);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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


@media screen and (max-width: 600px) {}
</style>