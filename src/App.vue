<template>
   <StarRating 
      nameRating="Терминатор"
      :totalStars= 5
      :sizeStars= 50
      activeColor="#edaa10"
      inactiveColor="#e0bd6a"
      :readonly="true"
   />
</template>

<script setup lang="ts">
import StarRating from "./components/StarRating.vue";
</script>
