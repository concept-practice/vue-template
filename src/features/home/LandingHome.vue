<template>
  <div class="container">
    <p>At Home</p>
    <p>{{ counter }}</p>
    <div>
      <button @click="setCounter(++counter)">Increase</button>
    </div>
    <form class="box" @submit="handleSubmit">
      <TextInput :use-input="first" :label="'First:'" :placeholder="'First'" />
      <TextInput :use-input="last" :label="'Last:'" :placeholder="'Last'" />
      <button type="submit" class="button is-primary" :disabled="disableSubmit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import useCanSubmit from "@/components/forms/hooks/UseCanSubmit";
import useTextInput from "@/components/forms/hooks/UseTextInput";
import TextInput from "@/components/forms/inputs/TextInput.vue";
import useState from "@/hooks/useState";
import { ValueDefaults } from "@/utilities/ValueDefaults";

const [counter, setCounter] = useState<number>(ValueDefaults.Number);

const first = useTextInput();
const last = useTextInput();

const disableSubmit = useCanSubmit([first, last]);

const handleSubmit = (event: Event): void => {
  event.preventDefault();
};
</script>
