<template>
    <div>
        <!-- <LazyCookie /> -->
        <!-- <ButtonsWhatsApp /> -->
        <header>
            <HeaderTop />
            <HeaderBot />
        </header>
        <main>
            <slot />
        </main>
     <Footer />
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active p {
    color: var(--green);
}
</style>