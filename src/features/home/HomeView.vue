<template>
  <div>
    <p>Hello There!</p>
    <div>
      {{ counter }}
      <button type="button" @click="counter++">Increase</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const counter = ref<number>(0);
</script>
