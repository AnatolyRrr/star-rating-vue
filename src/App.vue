<template>
   <star-rating
      :totalStars= 7
      :sizeStars= 60
      activeColor="red"
      inactiveColor="pink"
      :readonly="true"
   >
      <template #default>
         <h1>Терминатор</h1>
      </template>
   </star-rating>
</template>

<script setup lang="ts">
import StarRating from "./components/StarRating.vue";
</script>

<style lang="scss" scoped>
.star-rating {
   padding: 20px;
   box-shadow: 0px 0px 5px #000;
   border-radius: 5px;
}
</style>