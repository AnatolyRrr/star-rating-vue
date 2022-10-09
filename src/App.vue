<template>
   <StarRating 
      name="Терминатор"
      :total= 5
      :sizeStars= 50
      activeColor="#edaa10"
      inactiveColor="#e0bd6a"
      :readonly="false"
   />
</template>

<script setup lang="ts">
import StarRating from "./components/StarRating.vue";
</script>
