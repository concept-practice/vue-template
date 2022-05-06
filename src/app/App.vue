<template>
  <HomeView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeView from "@/features/home/HomeView.vue";

export default defineComponent({
  name: "App",
  components: {
    HomeView,
  },
});
</script>
