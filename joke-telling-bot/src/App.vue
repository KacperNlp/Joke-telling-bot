<template>
  <main
    class="flex flex-col items-center justify-end gap-4 md:gap-8 min-h-screen px-4 pt-8 pb-16 md:pb-24"
  >
    <AppMessage v-if="isJokeSet" :punchline="joke.punchline" :setup="joke.setup"></AppMessage>
    <AppIcon></AppIcon>
    <AppButton @click="tellAJoke">Tell me a joke!</AppButton>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type Joke = {
  type: string
  setup: string
  punchline: string
  id: number | null
}

const API_URL = 'https://official-joke-api.appspot.com/jokes/programming/random'
let joke = ref<Joke>({
  type: '',
  setup: '',
  punchline: '',
  id: null
})
let isLoading = ref(false)

const tellAJoke = async () => {
  isLoading.value = true
  const responseValueFromApi = await fetch(API_URL)
  const jokeObject = await responseValueFromApi.json()
  isLoading.value = false
  joke.value = jokeObject[0]
}

const isJokeSet = computed(() => {
  return !!joke.value.id && !isLoading.value
})
</script>
