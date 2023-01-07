<template>
  <BaseTextInput
    :use-input="useInput"
    :label="label"
    :placeholder="placeholder"
    :required="true"
    :type="'text'"
  />
</template>

<script setup lang="ts">
import type { IUseInput } from "@/components/Index";
import BaseTextInput from "./BaseTextInput.vue";

export interface TextInputProperties {
  label: string;
  placeholder: string;
  useInput: IUseInput<string>;
}

defineProps<TextInputProperties>();
</script>
