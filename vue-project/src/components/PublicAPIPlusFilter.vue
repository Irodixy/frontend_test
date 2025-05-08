<template>
    <FiltroBar @search="onSearch" />
    <DriverList :drivers="drivers" :year="filter.year" :sortOrder="filter.sortOrder" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import FiltroBar from './FiltroBar.vue'
import DriverList from './DriverList.vue'
const drivers = ref<any[]>([])
const filter = ref<{ 
    year: string; 
    query: string; 
    sortOrder: string 
}>({ 
        year: '', 
        query: '', 
        sortOrder: 'asc' 
    })

async function onSearch({ year, query, sortOrder }: { year: string; query: string; sortOrder: string }) {
    filter.value = { year, query, sortOrder }
    const base = 'https://f1api.dev/api'
    let url: string
    if (query) {
        url = `${base}/drivers/search?q=${encodeURIComponent(query)}`
    } else if (year) {
        url = `${base}/${year}/drivers`
    } else {
        url = `${base}/drivers`
    }
    const res = await fetch(url)
    const data = await res.json()
    drivers.value = data.drivers || data.driver
}
</script>

<style>
body {
    color: black;
}
</style>