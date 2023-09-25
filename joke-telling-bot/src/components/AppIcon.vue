<template>
  <div class="max-w-lg">
    <RobotIcon class="w-full h-auto robot"></RobotIcon>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import RobotIcon from '../assets/robot-svgrepo-com.svg'
import { onMounted } from 'vue'

const ROBOT_CLASS = '.robot'

onMounted(() => {
  gsap.fromTo(ROBOT_CLASS, { y: -100, opacity: 0 }, { duration: 1, y: 0, opacity: 1 })
  setTimeout(robotInfiniteAnimation, 800)
})

const robotInfiniteAnimation = () => {
  const tl = gsap.timeline({ repeat: -1 })

  tl.from(ROBOT_CLASS, { y: 0, duration: 0.2, ease: 'Power0.easeNone' })
  tl.to(ROBOT_CLASS, { y: -20, duration: 1, ease: 'Power0.easeNone' })
  tl.to(ROBOT_CLASS, { y: 0, duration: 1, ease: 'Power0.easeNone' })
}
</script>
