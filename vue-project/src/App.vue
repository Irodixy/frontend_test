<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<style lang="scss">
@use "@/scss/main.scss" as *;
</style>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
</template>
