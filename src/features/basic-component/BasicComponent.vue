<template>
  <p>{{ showText ? "Hello Michael" : "Sign In" }}</p>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  showText: boolean;
}>();
</script>
