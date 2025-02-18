<!-- src/components/StatsCard.vue -->
<template>
  <div class="p-6 rounded-xl bg-white shadow-lg text-center">
    <h2 class="text-lg font-semibold">{{ title }}</h2>
    <p class="text-3xl font-bold">{{ value }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
})
</script>
