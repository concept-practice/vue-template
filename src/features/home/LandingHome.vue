<template>
  <p>At Home</p>
  <p>{{ counter }}</p>
  <div>
    <button @click="handleUpdateCounter">Increase</button>
  </div>
  <BaseTextInput
    :use-input="input"
    :label="'Name:'"
    :placeholder="'Name'"
    :type="'text'"
    :required="true"
  />
  <p>{{ input.state.value }}</p>
</template>

<script setup lang="ts">
import useTextInput from "@/components/forms/hooks/UseTextInput";
import BaseTextInput from "@/components/forms/inputs/BaseTextInput.vue";
import { ref } from "vue";

const counter = ref<number>(0);

const handleUpdateCounter = (): void => {
  ++counter.value;
};

const input = useTextInput();
</script>
