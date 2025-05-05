<template>
    <ul class="accordion">
        <li v-for="(item, i) in items" :key="item.id">
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
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface AccordionData {
    id: string
    title: string
    details?: Record<string, any>
}

const props = defineProps<{
    items: AccordionData[]
}>()

const emit = defineEmits<{
    (e: 'open', id: string): void
}>()

// 2) Índice aberto (ou null)
const openIndex = ref<number | null>(null)

// 3) Função que abre/fecha e dispara loadDetails
function toggle(idx: number, id: string) {
    if (openIndex.value === idx) {
        openIndex.value = null
    } else {
        openIndex.value = idx
        emit('open', id)
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
</style>