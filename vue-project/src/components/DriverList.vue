<template>
    <!-- <ul>
        <li v-for="driver in drivers" :key="driver.driverId">
            {{ driver.name }} {{ driver.surname }}
            <button @click="loadDetails(driver.driverId)">
                Ver Detalhes
            </button>
            <div v-if="details[driver.driverId]">
                <p>Nacionalidade: {{ details[driver.driverId].nationality }}</p>
                <p>Aniversário: {{ details[driver.driverId].birthday }}</p>
            </div>
        </li>
    </ul> -->

    <Accordion :items="items" @open="handleOpen" />
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
    year?: int
}>()
const items = ref<AccordionData[]>([])
// const items = ref<AccordionData[]>(
//     props.drivers.map(d => ({
//         id: d.driverId,
//         title: `${d.name} ${d.surname}`,
//     }))
// )
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
                    // details fica undefined até abrir o acordeão
                }))
        } else {
            items.value = []  // mantém vazio se não houver drivers
        }
    },
    { immediate: true }
)

const details = ref<Record<string, any>>({})

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