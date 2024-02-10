<template>
    <NuxtLink :to="Link">
        {{ ButtonTekst }}<img src="/buttons/arrow.svg" width="33" height="16" alt="test pijl">
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    ButtonTekst: String,
    Link: String,
})

</script>

<style scoped>
a {
    max-width: 335px;
    border: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 30px;
    color: #fff;
    background: linear-gradient(266.72deg, #778171 0%, #8ea680 99.03%);
    padding: 16px 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    cursor: pointer;
    text-decoration: none;
    font-family: inter;
}



a:hover {
    color: var(--color-orange);
    /* transform: translateY(-3px);   
    transition: transform 300ms ease; */
}

@media screen and (max-width: 720px) {
    a {
        max-width: 100%;
        width: 100%;
        justify-content: space-between;
    }
}
</style>