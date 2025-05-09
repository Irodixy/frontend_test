<template>
    <section class="text-image-combo">
        <div v-for="item in displayedItems" class="combo-row">
            <div class="txt">{{ item.text }}</div>
            <div class="img"><img :src="item.src" alt="" /></div>
        </div>

        <button v-if="displayCount < items.length" class="show-more" @click="loadMore">
            Mostrar mais
        </button>
    </section>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'

interface ComboItem { text: string; src: string }

// 1) Props com todos os itens
const props = defineProps<{ items: ComboItem[] }>()

// 2) Quantas linhas mostrar inicialmente
const displayCount = ref(2)

// 3) Computed que retorna só até displayCount
const displayedItems = computed(() =>
    props.items.slice(0, displayCount.value)
)                                              // :contentReference[oaicite:5]{index=5} :contentReference[oaicite:6]{index=6}

// 4) Aumenta de 2 em 2 até o total
function loadMore() {
    displayCount.value = Math.min(
        displayCount.value + 2,
        props.items.length
    )
}
</script>

<style lang="scss" scoped>
@use '@/scss/abstracts/index' as *; // variáveis e mixins

.text-image-combo {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .combo-row {
        @include slider-window; // mixin só como exemplo de overflow
        display: flex;
        align-items: center;
        gap: 1rem;

        &:nth-child(odd) {
        flex-direction: row;
        }

        &:nth-child(even) {
            flex-direction: row-reverse;
        }

        .txt {
            flex: 1;
        }

        .img {
            flex: 1;

            img {
                width: 100%;
                height: auto;
                display: block;
            }
        }
    }

    .show-more {
        @include button-reset; // mixin para limpar o botão
        margin-top: 1.5rem;
        align-self: center;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
}
</style>