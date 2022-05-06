<template>
  <div>
    <p>Hello There!</p>
    <div>
      {{ counter }}
      <button type="button" @click="counter++">Increase</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomeView",
  setup() {
    const counter = ref<number>(0);

    return {
      counter,
    };
  },
});
</script>
