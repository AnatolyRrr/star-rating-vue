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
