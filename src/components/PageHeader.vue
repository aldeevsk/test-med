<template>
    <header class="header">
        <div class="container">
            <h1 class="header__title">Сеанс гемодиализа</h1>
            <span class="header__number">№ месяце: 4</span>
        </div>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header {
    min-height: 6rem;
    padding: var(--gap), 0;
}
.header .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.header__title, .header__number {
    min-width: 50%;
}
</style>