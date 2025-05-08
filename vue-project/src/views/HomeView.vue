<script setup lang="ts">
import ImageSlider from '../components/ImageSlider.vue'
import TextImageCombo from '../components/TextImageCombo.vue'

interface ComboItem {
  text: string
  src: string
}

const commonPath = 'src/assets/images/text-image-combo/'
const comboItems: ComboItem[] = [
  { text: 'Texto da primeira linha', src: commonPath + 'img1.png' },
  { text: 'Texto da segunda linha', src: commonPath + 'img2.png' },
  { text: 'Texto da terceira linha', src: commonPath + 'img3.png' },
]

</script>

<template>
  <main>
    <ImageSlider />
    <TextImageCombo :items="comboItems" />
  </main>
</template>
