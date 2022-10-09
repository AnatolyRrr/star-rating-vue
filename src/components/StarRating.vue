<template>
   <div class="container">
      <div class="form">
         <input v-model.trim="nameRating" type="text" class="name-field" placeholder="Текст рейтинга">

         <div class="option">
            <label for="star-counter" class="option__label">Количество звезд (1-10):</label>
            <input v-model.number="totalStars" class="option__field" type="number" min="1" max="10" name="star-counter" id="star-counter">
         </div>

         <div class="option">
            <label class="option__label">Размер звезд:</label>
            <div class="star-size">
               <button @click.prevent="downsize" class="star-size__btn" :disabled="sizeStars === 10">-</button>
               <p>{{sizeStars + 50}}%</p>
               <button @click.prevent="upsize" class="star-size__btn" :disabled="sizeStars === 100">+</button>
            </div>
         </div>

         <div class="option">
            <label class="option__label">Цвет активной звезды:</label>
            <select v-model="activeColor" name="active-color" class="option__field">
               <option value="#edaa10">Gold</option>
               <option value="#ed1010">Red</option>
               <option value="#1026ed">Blue</option>
               <option value="#10ed2e">Green</option>
               <option value="#ed10c8">Pink</option>
            </select>
         </div>

         <div class="option">
            <label class="option__label">Цвет неактивной звезды:</label>
            <select v-model="inactiveColor" name="inactive-color" class="option__field">
               <option value="#e0bd6a">Gold</option>
               <option value="#e06a6a">Red</option>
               <option value="#6a72e0">Blue</option>
               <option value="#6ae070">Green</option>
               <option value="#dc6ae0">Pink</option>
            </select>
         </div>
      </div>

      <hr />

      <h1>{{nameRating}} : {{activeStar}}</h1>

      <div class="stars">
         <IconStar 
            v-for="star in totalStars" 
            :key="star"
            :size="sizeStars"
            :color="star <= activeStar ? activeColor : inactiveColor"
            @hover-star="hoverStar(star)"
            @leave-hover-star="leaveHoverStar"
            @focus-star="chooseRating(star)"
         />
      </div>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// @ts-ignore
import IconStar from './icons/IconStar.vue'

const nameRating = ref<string>('');
const totalStars = ref<number>(5);
const sizeStars = ref<number>(50);
const activeColor = ref<string>('#edaa10');
const inactiveColor = ref<string>('#e0bd6a');
const activeStar = ref<number>(0)
const isReadonly = ref<boolean>(false)

const upsize = () => sizeStars.value += 5

const downsize = () => sizeStars.value -= 5

const hoverStar = (star: number) => {
   if(!isReadonly.value) {
      activeStar.value = star
   }
}

const leaveHoverStar = () => {
   if(!isReadonly.value) {
      activeStar.value = 0
   }
}

const chooseRating = (star: number) => {
   isReadonly.value = true
   activeStar.value = star
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

.name-field {
   width: 100%;
}

.option {
   display: flex;
   justify-content: space-between;
   margin: 10px 0;
   width: 320px;

   &__label {
      padding-right: 10px;
   }

   &__field {
      width: 100px;
   }
}

.star-size {
   width: 100px;
   display: flex;
   justify-content: space-between;
   &__btn {
      padding: 0;
      width: 20px;
      height: 20px;
   }
}

.submit-btn {
   width: 100%;
   text-align: center;
   text-transform: uppercase;
   margin-top: 10px;
   padding: 5px 0;
   font-weight: bold;
}
</style>