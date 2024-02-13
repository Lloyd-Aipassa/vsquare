<template>
    <section class="team-section" v-for="(card, index) in cardTeam" :key="index">
        <div class="team-card">
            <img loading="lazy" :src="card.Image" class="face-img" alt="Foto team">
            <div class="team-card-content">
                <p>{{ card.Name }}</p>
                <button @click="isOpen = true">Read more <img class="arrow" src="/buttons/arrow.svg" alt=""></button>
            </div>
        </div>

        <div class="root">
            <Teleport to="body">
                <Transition>
                    <div class="modal" v-show="isOpen">
                        <div class="popup">
                            <div class="name-image-container">
                                <img img loading="lazy" :src="card.Image" class="popup-img" alt="Foto team">
                                <p>{{ card.Name }}</p>
                            </div>
                            <p v-html="card.p"></p>
                            <button class="close" @click="isOpen = false">sluiten</button>
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
    background-color: rgba(0, 0, 0, 0.6);
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
    overflow: auto;
    justify-content: center;
    max-width: 800px;
    min-height: 300px;
    background-color: var(--color-green);
    border-radius: 8px;
}

.name-image-container {
    display: flex;
    align-items: flex-end;
    gap: 24px;
}

.name-image-container p {
    font-size: 24px;
    margin: 0 !important;
    color: var(--color-light-green) !important;
}

.popup button {
    background-color: #ffffff00;
    border: none;
    color: var(--color-orange);
    padding: 0;
    text-align: left;

}

img.popup-img {
    width: 125px;
    border-radius: 8px;
}

.popup p {
    color: #fff;
    margin: 24px 0;
}

button.close {
    color: #fff;
    margin: 24px 0 0;
    font-size: 18px;
}

button.close:hover {
    color: var(--color-light-green);
    margin: 24px 0 0;
    font-size: 18px;
}

@media screen and (max-width: 1439px) {}

@media screen and (max-width: 1239px) {}

@media screen and (max-width: 720px) {



    .team-card {
        width: 100%;
    }

    .team-card-content {
        width: 50%;
        aspect-ratio: 1;
        padding-left: 24px;
    }

    .team-card-content p {
        font-size: 16px;
    }

    img.arrow {
        width: 30px !important;
    }

    .team-card img {
        width: 50%;
        height: auto;
    }


    .modal {
        background-color: rgba(0, 0, 0, 0.7);
    }

    .popup {
        width: 90%;
        margin: 0 auto;
    }

    .popup {
        padding: 24px;
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