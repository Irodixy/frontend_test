<template>
    <ul class="accordion">
        <li v-for="(item, i) in paginatedItems" :key="item.id">
            <div class="accordion-header" :class="{ open: openIndex === i }" @click="toggle(i, item.id)">
                <span class="icon">
                    {{ openIndex === i ? '−' : '+' }}
                </span>
                <span class="title">
                    {{ item.title }}
                </span>
            </div>

            <!-- Corpo ocultável -->
            <transition name="accordion">
                <div v-show="openIndex === i" class="accordion-body">
                    <div v-if="item.details">
                        <div v-for="(detail, key) in item.details" :key="key">
                            <p><strong> {{ key }}: </strong> {{ detail }}</p>
                        </div>
                    </div>
                    <div v-else class="loading">
                        Carregando detalhes…
                    </div>
                </div>
            </transition>
        </li>
    </ul>

    <div v-if="totalPages > 1" class="pagination-controls">
        <button @click="prevPage" :disabled="currentPage === 0">← Previous</button>
        <span>Page {{ currentPage + 1 }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages - 1">Next →</button>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface AccordionData {
    id: string
    title: string
    details?: Record<string, any>
}

const props = defineProps<{
    items: AccordionData[]
    pagination?: {
        enabled: boolean,
        itemsPerPage: number
    }
}>()

const emit = defineEmits<{
    (e: 'open', id: string): void
}>()

// 2) Índice aberto (ou null)
const openIndex = ref<number | null>(null)

// Pagination variables
const currentPage = ref(0) // Current page index
const paginationEnabled = computed(() => props.pagination?.enabled || false) // Default to false
const itemsPerPage = computed(() => props.pagination?.itemsPerPage || 10) // Default to 10 items per page

const paginatedItems = computed(() => {
    if (paginationEnabled.value) {
        const start = currentPage.value * itemsPerPage.value
        const end = start + itemsPerPage.value
        return props.items.slice(start, end)
    }
    return props.items
})

const totalPages = computed(() => {
    if (paginationEnabled.value) {
        return Math.ceil(props.items.length / itemsPerPage.value)
    }
    return 1
})

// 3) Função que abre/fecha e dispara loadDetails
function toggle(idx: number, id: string) {
    if (openIndex.value === idx) {
        openIndex.value = null
    } else {
        openIndex.value = idx
        emit('open', id)
    }
}

function nextPage() {
    if (currentPage.value < totalPages.value - 1) {
        currentPage.value++
    }
}

function prevPage() {
    if (currentPage.value > 0) {
        currentPage.value--
    }
}
</script>

<style lang="scss" scoped>
.accordion {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        margin-bottom: 0.5rem;

        .accordion-header {
            display: flex;
            align-items: center;
            background: #f5f5f5;
            cursor: pointer;
            padding: 0.75rem 1rem;
            border-radius: 4px;

            &.open {
                background: #e0e0e0;
            }

            .icon {
                width: 1.5rem;
                text-align: center;
                font-weight: bold;
                margin-right: 0.75rem;
            }

            .title {
                flex: 1;
            }
        }

        .accordion-body {
            padding: 0.75rem 1rem;
            border: 1px solid #ddd;
            border-top: none;
            border-radius: 0 0 4px 4px;
            background: #fff;
        }
    }
}

/* Animação suave de abrir/fechar */
.accordion-enter-from,
.accordion-leave-to {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
}

.accordion-enter-active,
.accordion-leave-active {
    transition: max-height 0.3s ease, opacity 0.2s ease;
}

.accordion-enter-to,
.accordion-leave-from {
    max-height: 500px;
    /* valor suficiente para o conteúdo */
    opacity: 1;
}

.pagination-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    gap: 1rem;

    button {
        padding: 0.5rem 1rem;
        border: 1px solid #ddd;
        background: #f5f5f5;
        cursor: pointer;
        border-radius: 4px;

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }

    span {
        font-weight: bold;
    }
}
</style>