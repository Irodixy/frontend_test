<template>
    <Accordion :items="items" :pagination="pagination" @open="handleOpen" />
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import Accordion from './Accordion.vue'

interface Driver {
    driverId: string;
    name: string;
    surname: string
}
interface AccordionData {
    id: string;
    title: string;
    details?: any[];
}

const props = defineProps<{
    drivers: Driver[];
    year?: string;
    sortOrder: string;
}>()
const items = ref<AccordionData[]>([])
watch(
    () => props.drivers,
    (drivers) => {
        if (drivers && drivers.length) {
            updateItems(drivers)
        } else {
            items.value = []  // mantém vazio se não houver drivers
        }
    },
    { immediate: true }
)

function updateItems(drivers: Driver[]) {
    items.value = drivers
        .sort((a, b) => {
            if (props.sortOrder === 'asc') {
                return a.name.localeCompare(b.name)
            } else {
                return b.name.localeCompare(a.name)
            }
        })
        .map((d) => ({
            id: d.driverId,
            title: `${d.name} ${d.surname}`,
        }))
}

const pagination = ref ({
    enabled: true,
    itemsPerPage: 10,
})

async function handleOpen(driverId: string) {
    const idx = items.value.findIndex((i) => i.id === driverId)
    if (idx === -1) return

    // se já tiver detalhes, nada a fazer
    if (items.value[idx].details) return

    // busca detalhes via API
    const path = props.year
        ? `https://f1api.dev/api/${props.year}/drivers/${driverId}`
        : `https://f1api.dev/api/drivers/${driverId}`
    const res = await fetch(path)
    const data = await res.json()

    items.value[idx].details = props.year ? data.driver : data.driver[0]
}
</script>