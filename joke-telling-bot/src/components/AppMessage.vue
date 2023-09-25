<template>
  <div
    class="message absolute top-5 md:top-20 left-1/2 translate-x-[-50%] bg-slate-100 px-4 md:px-8 py-2 md:py-4 rounded-xl text-center"
  >
    <p class="text-slate-700 mb-4 setup">{{ setup }}</p>
    <p class="text-slate-700 punchline">{{ punchline }}</p>
  </div>
</template>
<script setup lang="ts">
import { defineProps, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

defineProps({
  setup: String,
  punchline: String
})

onMounted(() => {
  gsap.from('.message', { y: 30, opacity: 0, duration: 0.4 })
  gsap.from('.punchline', { x: -10, opacity: 0, duration: 0.2, delay: 2 })
})

onUnmounted(() => {
  gsap.to('.message', { y: 30, opacity: 0, duration: 0.4 })
})
</script>
