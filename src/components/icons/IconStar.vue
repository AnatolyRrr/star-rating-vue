<template>
   <svg
   :fill="color"
   :height="size"
   viewBox="0 0 25 25"
   :width="size"
   @mouseover="hoverStar"
   @mouseleave="leaveHoverStar"
   @click="focusStar"
   >
      <polygon
      strokeWidth="0"
      points="9.9, 1.1, 3.3, 21.78, 19.8,
      8.58, 0, 8.58, 16.5, 21.78"
      />
   </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
   size: number
   color: string
}>()

const emit = defineEmits(['hover-star', 'leave-hover-star', 'focus-star'])

const hoverStar = () => emit('hover-star')

const leaveHoverStar = () => emit('leave-hover-star')

const focusStar = () => emit('focus-star')

</script>

<style lang="scss" scoped>

</style>