<script setup lang="ts">
import GetInfoInURL from '../components/GetInfoInURL.vue'

</script>

<template>
    <div class="playground">
        <h1>Playground</h1>
        <h3>Here I try somethings that didn't work. Shame, but it was fun to play around</h3>
    </div>
    <GetInfoInURL />
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>