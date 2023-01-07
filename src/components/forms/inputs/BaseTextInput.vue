<template>
  <div class="field">
    <label :for="inputId" class="label">{{ label }}</label>
    <div :id="inputId" class="control">
      <input
        class="input"
        :class="isDirtyInvalid ? 'is-danger' : ''"
        :type="type"
        :placeholder="placeholder"
        :value="hook.state"
        :required="required"
        @input="handleInput"
        @focus="handleInput"
      />
    </div>
    <p class="help is-danger" :class="isDirtyInvalid ? '' : 'is-invisible'">
      {{ isDirtyInvalid ? hook.error : "valid" }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { IUseInput } from "@/components/Index";
import useState from "@/hooks/useState";
import { ValueDefaults } from "@/utilities/ValueDefaults";
import { reactive, computed } from "vue";

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

const [dirty, setDirty] = useState<boolean>(ValueDefaults.Boolean);

const handleInput = (event: Event): void => {
  setDirty(true);
  hook.handleEvent(event);
};

const isDirtyInvalid = computed<boolean>(() => dirty.value && !hook.valid);
</script>
