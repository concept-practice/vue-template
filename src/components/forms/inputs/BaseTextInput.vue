<template>
  <div class="field">
    <label :for="inputId" class="label">{{ label }}</label>
    <div :id="inputId" class="control">
      <input
        class="input"
        :class="hook.valid ? '' : 'is-danger'"
        :type="type"
        :placeholder="placeholder"
        :value="hook.state"
        :required="required"
        @input="hook.handleEvent"
        @focus="hook.handleEvent"
      />
    </div>
    <p class="help is-danger">{{ hook.error }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import type { IUseInput } from "../interfaces/IUseInput";

export interface BaseTextInputProperties {
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  useInput: IUseInput<string | number | Date>;
}

const properties = defineProps<BaseTextInputProperties>();

const hook = reactive(properties.useInput);

const inputId = Math.random().toString();
</script>
