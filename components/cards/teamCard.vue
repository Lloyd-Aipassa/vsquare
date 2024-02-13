<template>
    <section class="team-section" v-for="(card, index) in cardTeam" :key="index">
        <div class="team-card">
            <img loading="lazy" :src="card.Image" class="face-img" alt="Foto team">
            <div class="team-card-content">
                <p>Felix Hillen</p>
                <button @click="isOpen = true">Read more <img src="/buttons/arrow.svg" alt=""></button>
            </div>
        </div>

        <div class="root">
            <Teleport to="body">
                <Transition>
                    <div class="modal" v-show="isOpen">
                        <div class="popup">
                            <img img loading="lazy" :src="card.Image" class="popup-img" alt="Foto team">
                            <p>{{ card.p }}</p>
                            <!-- <img loading="lazy" src="/home/team/Felix.webp" alt="">
                            <div class="team-card-content">
                                <p>Felix Hillen</p>
                            </div> -->
                            <button @click="isOpen = false">sluiten</button>
                        </div>
                    </div>
                </Transition>
            </Teleport>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    cardTeam: {
        type: Array,
        required: true
    }
})

const isOpen = ref(false)
</script>

<style scoped>
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

.root {
    position: relative;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;

}

.popup {
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 50px;
    /* align-items: center; */
    justify-content: center;
    max-width: 800px;
    min-height: 300px;
    background-color: var(--color-green);
    box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.9);
    border-radius: 8px;
}

.popup button {
    background-color: #ffffff00;
    border: none;
    color: var(--color-orange);
    padding: 0;
    text-align: left;

}

img.popup-img {
    width: 250px;
}

.popup p {
    color: #fff;
    margin: 24px 0;
}

@media screen and (max-width: 1439px) {
    .recommendation {
        max-width: 1080px;
    }
}

@media screen and (max-width: 1239px) {
    .recommendation {
        max-width: 785px;
        margin: 0 auto 54px;
    }
}

@media screen and (max-width: 720px) {



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

    .recommendation {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        max-width: 90%;
        padding: 28px;
        gap: 32px;
    }

    .q {
        width: 100%;
    }

    .recommendation img.face-img {
        border-radius: 50%;
        width: 74px;
        height: 74px;
    }

    .modal {
        background-color: rgba(0, 0, 0, 0.7);
    }

    .popup {
        width: 90%;
        margin: 0 auto;
    }

}

.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    /* transform: translateX(-100%); */
    opacity: 0;
}
</style>