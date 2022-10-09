<template>
   <div class="container">
      <h1>{{name}} : {{activeStar}}</h1>

      <div class="stars">
         <svg
            v-for="star in total"
            :key="star"
            :fill="star <= activeStar ? activeColor : inactiveColor"
            :height="sizeStars"
            viewBox="0 0 25 25"
            :width="sizeStars"
            @mouseover="hoverStar(star)"
            @mouseleave="leaveHoverStar"
            @click="chooseRating(star)"
         >
            <polygon
            strokeWidth="0"
            points="9.9, 1.1, 3.3, 21.78, 19.8,
            8.58, 0, 8.58, 16.5, 21.78"
            />
         </svg>
      </div>
   </div>
</template>

<script setup lang="ts">
import { readonly, ref } from 'vue';

const props = defineProps<{
   name: string
   total: number
   sizeStars: number
   activeColor: string
   inactiveColor: string
   readonly: boolean
}>()

let activeStar = ref<number>(0)
const isFocus = ref<boolean>(false)

const hoverStar = (star: number) => {
   if(!isFocus.value) {
      activeStar.value = star
   }
}

const leaveHoverStar = () => {
   if(!isFocus.value) {
      activeStar.value = 0
   }
}

const chooseRating = (star: number) => {
   isFocus.value = true
   if(props.readonly) {
      activeStar = readonly<any>(star)
   } else {
      activeStar.value = star
   }
}
</script>

<style scoped lang="scss">
.container {
  padding: 20px;
  margin: 20px;
  box-shadow: 0px 0px 5px #000;
  border-radius: 5px;
  min-width: 500px;
}
</style>