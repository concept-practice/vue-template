<template>
  <p>At Home</p>
  <p>{{ counter }}</p>
  <div>
    <button @click="handleUpdateCounter">Increase</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const counter = ref<number>(0);

const handleUpdateCounter = (): void => {
  ++counter.value;
};
</script>
