<template>
	<div class="field">
		<label class="label">{{ label }}:</label>
		<div class="control">
			<input
				:placeholder="placeholder"
				required
				:value="useInput.value.value"
				:class="{ 'is-danger': !useInput.isValid.value }"
				class="input"
				type="text"
				@input="onChange" />
		</div>
		<p v-if="!useInput.isValid.value" class="help is-danger">This field is invalid.</p>
	</div>
</template>

<script lang="ts">
import IUseInput from '@/features/airplanes/IUseInput';
import { defineComponent, PropType } from '@vue/runtime-core';

const Input = defineComponent({
	name: 'Input',
	props: {
		label: { type: String, required: true },
		placeholder: { type: String, required: true },
		useInput: { type: Object as PropType<IUseInput<string>>, required: true },
	},
	methods: {
		onChange(event: Event): void {
			var asInput = event.target as HTMLInputElement;

			this.useInput.setIsValid(asInput.validity.valid);
			this.useInput.setValue(asInput.value);
		},
	},
});

export default Input;
</script>
