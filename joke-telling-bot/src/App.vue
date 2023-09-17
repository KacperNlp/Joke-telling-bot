<template>
  <main>
    <h1 class="text-xl" v-if="joke.id">{{ joke.setup }}</h1>
    <AppButton @click="tellAJoke">Tell me a joke!</AppButton>
  </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

type Joke = {
  type: string
  setup: string
  punchline: string
  id: number | null
}

const API_URL = 'https://official-joke-api.appspot.com/jokes/programming/random'
let joke: Joke = reactive({
  type: '',
  setup: '',
  punchline: '',
  id: null
})

const tellAJoke = async () => {
  const responseValueFromApi = await fetch(API_URL)
  const jokeObject = await responseValueFromApi.json()
  joke = jokeObject[0]
  console.log('Hello')
}
</script>
