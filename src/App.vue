<template>
   <StarRating 
      nameRating="Терминатор"
      :totalStars= 7
      :sizeStars= 60
      activeColor="red"
      inactiveColor="pink"
      :readonly="true"
   />
</template>

<script setup lang="ts">
import StarRating from "./components/StarRating.vue";
</script>
