<template>
   <div class="star-rating">
      <div class="star-rating__info">
         
         <slot>
            <h1>Название рейтинга</h1>
         </slot>

         <h1 class="star-rating__total">: {{selectedRating}}</h1>
      </div>

      <div class="stars">
         <svg
            v-for="star in totalStars"
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
import { ref } from 'vue';

const props = defineProps({
   nameRating: {
      type: String,
      default: 'Имя рейтинга'
   },
   totalStars: {
      type: Number,
      default: 5
   },
   sizeStars: {
      type: Number,
      default: 50
   },
   activeColor: {
      type: String,
      default: '#edaa10'
   },
   inactiveColor: {
      type: String,
      default: '#e0bd6a'
   },
   readonly: {
      type: Boolean,
      default: false
   }
})

const activeStar = ref<number>(0)
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
   if(props.readonly && isFocus.value) {
      return
   } else {
      isFocus.value = true
      activeStar.value = star
   }
}
</script>

<style lang="scss" scoped>
.star-rating__info {
   display: flex;
}
</style>