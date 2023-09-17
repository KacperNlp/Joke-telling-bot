<template>
  <main class="flex flex-col items-center justify-center gap-4 md:gap-8 min-h-screen px-4 py-8">
    <h1 class="text-xl" v-if="joke.id">{{ joke.setup }}</h1>
    <AppIcon></AppIcon>
    <AppButton @click="tellAJoke">Tell me a joke!</AppButton>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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

const tellAJoke = async () => {
  const responseValueFromApi = await fetch(API_URL)
  const jokeObject = await responseValueFromApi.json()
  joke.value = jokeObject[0]
  console.log(joke)
}
</script>
