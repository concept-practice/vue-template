<template>
  <p :class="isBlue ? 'is-blue' : 'is-red'">Hello There!</p>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  isBlue: boolean;
}>();
</script>

<style scoped>
.is-blue {
  color: skyblue;
}

.is-red {
  color: maroon;
}
</style>
