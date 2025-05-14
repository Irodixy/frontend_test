<template>
    <div class="image-slider">
        <div class="slider-window" ref="sliderWindow" @mousedown="startDrag" @touchstart="startDrag" @mouseup="endDrag"
            @touchend="endDrag" @mousemove="onDrag" @touchmove="onDrag">
            <div class="slides" :style="slideStyles">
                <div class="slide" v-for="(img, index) in images" :key="index" @error="onError(index)"
                    @load="onLoad(index)">
                    <img :src="loaded[index] ? img.src : DEFAULT_IMAGE" :class="{ 'loading': !loaded[index] }"
                        alt="Slide image" />
                    <div v-if="!loaded[index]" class="spinner"></div>
                </div>
            </div>
        </div>

        <button class="btn prev" @click="prevSlide">‹</button>
        <button class="btn next" @click="nextSlide">›</button>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

let DEFAULT_IMAGE = '/src/assets/images/*.{png,jpg,jpeg,svg,avif}'

let modules = import.meta.glob<string>(
    '/src/assets/images/slider/*.{png,jpg,jpeg,svg,avif}',
    { eager: true, import: 'default' }
);

let urls = Object.values(modules)

if (urls.length === 0) {
    let defaultUrl = Object.values(import.meta.glob(
        '/src/assets/images/*.{png,jpg,jpeg,svg,avif}', { eager: true, import: 'default' }
    ))[0]
    urls = [defaultUrl as string]
}

const images = ref(urls.map((url) => ({ src: url })))

const loaded = ref<boolean[]>(images.value.map(() => false))
const current = ref(0)
const timer = ref<number | null>(null)
const isDragging = ref(false)
const startX = ref(0)
const offset = ref(0)

const slideStyles = computed(() => ({
    transform: `translateX(calc(-${current.value * 100}% + ${offset.value}px))`,
}))

function loadImage(index: number) {
    const img = new Image()
    img.src = images.value[index].src
    img.onload = () => { loaded.value[index] = true }
    img.onerror = () => { loaded.value[index] = true }
}

function onLoad(index: number) { loaded.value[index] = true }
function onError(index: number) { loaded.value[index] = true }

function nextSlide() {
    current.value = (current.value + 1) % images.value.length
    resetTimer()
}

function prevSlide() {
    current.value = (current.value - 1 + images.value.length) % images.value.length
    resetTimer()
}

function startAutoSlide() {
    timer.value = window.setInterval(nextSlide, 3000)
}

function resetTimer() {
    if (timer.value) clearInterval(timer.value)
    startAutoSlide()
}

// Drag / Touch handlers
function startDrag(event: MouseEvent | TouchEvent) {
    isDragging.value = true
    startX.value = 'touches' in event ? event.touches[0].clientX : event.clientX

    if (timer.value) clearInterval(timer.value)
}

function onDrag(event: MouseEvent | TouchEvent) {
    if (!isDragging.value) return
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX
    offset.value = clientX - startX.value
}

function endDrag() {
    if (!isDragging.value) return
    isDragging.value = false
    if (offset.value > 50) prevSlide()
    else if (offset.value < -50) nextSlide()
    offset.value = 0
}

onMounted(() => {
    images.value.forEach((_, i) => loadImage(i))
    startAutoSlide()
})

onUnmounted(() => {
    if (timer.value) clearInterval(timer.value)
})
</script>

<style lang="scss" scoped> //scope = only for this script
    .image-slider {
        //height: 1vh;
        display: flex;

    }
    
    img {
        object-fit: contain !important;
        height: auto;
    }

    .btn {
        .prev {

        }
        .next {
            
        }
    }
    .slider-window {
        touch-action: pan-y;
    }
</style>