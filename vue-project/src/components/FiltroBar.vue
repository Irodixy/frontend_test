<template>
    <form @submit.prevent="onSearch">
        <select v-model="year">
            <option value="">Todos os anos</option>
            <option v-for="s in seasons" :key="s.year" :value="s.year">
                {{ s.year }}
            </option>
        </select>

        <input type="text" v-model="query" placeholder="Pesquisar piloto" />

        <select v-model="sortOrder">
            <option value="asc">A to Z</option>
            <option value="desc">Z to A</option>
        </select>
        
        <button type="submit">Buscar</button>
    </form>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
interface Season { year: number }
const seasons = ref<Season[]>([])
const year = ref<string>('')
const query = ref<string>('')
const sortOrder = ref<'asc' | 'desc'>('asc')

// 1) Carrega anos
onMounted(async () => {
    const res = await fetch('https://f1api.dev/api/seasons')
    const data = await res.json()
    seasons.value = data.championships   // :contentReference[oaicite:9]{index=9}
})

// 2) Emite evento ao submeter
const emit = defineEmits<{
    (e: 'search', payload: { year: string; query: string; sortOrder: 'asc' | 'desc' }): void
}>()
function onSearch() {
    emit('search', { year: year.value, query: query.value, sortOrder: sortOrder.value })
}
</script>