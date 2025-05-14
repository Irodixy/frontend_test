<script setup lang="ts">
import { useRoute, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
const route = useRoute()

// Define routes where the NavBar should be hidden
const hiddenNavRoutes = ['/immera']
</script>

<style lang="scss">
@use "@/scss/main.scss" as *;
</style>

<template>
  <header v-if="!hiddenNavRoutes.includes(route.path)">
    <NavBar />
  </header>

  <RouterView />
</template>
