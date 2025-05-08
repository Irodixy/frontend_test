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
}>()
const items = ref<AccordionData[]>([])
watch(
    () => props.drivers,
    (drivers) => {
        if (drivers && drivers.length) {
            items.value = drivers
                // opcional: ordena alfabeticamente
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((d) => ({
                    id: d.driverId,
                    title: `${d.name} ${d.surname}`
                }))
        } else {
            items.value = []  // mantém vazio se não houver drivers
        }
    },
    { immediate: true }
)
const pagination = ref ({
    enabled: true,
    itemsPerPage: 6,
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

// // Function to organize data
// function prepareData(drivers: Driver[]) {
//     // Example: Sort drivers alphabetically by name
//     return drivers.sort((a, b) => a.name.localeCompare(b.name))
// }

// // Watch for changes to the `drivers` prop
// watch(
//     () => props.drivers,
//     (newDrivers) => {
//         if (newDrivers) {
//             const organizedDrivers = prepareData(newDrivers)
//             console.log('Organized Drivers:', organizedDrivers)
//         }
//     },
//     { immediate: true } // Trigger the watcher immediately on component mount
// )

// async function loadDetails(id: string) {
//     if (details.value[id]) return
//     const path = props.year
//         ? `https://f1api.dev/api/${props.year}/drivers/${id}`
//         : `https://f1api.dev/api/drivers/${id}`
//     const res = await fetch(path)
//     const data = await res.json()

//     details.value[id] = props.year ? data.driver : data.driver[0]
// }
</script>