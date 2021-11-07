<template>
	<Container>
		<div class="columns">
			<div class="column"></div>
			<div class="column">
				<form @submit="onSubmit">
					<div class="field">
						<label class="label">Manufacturer:</label>
						<div class="control">
							<input
								v-model="manufacturer.value.value"
								:class="{ 'is-danger': !manufacturer.isValid.value }"
								class="input"
								type="text"
								placeholder="Manufacturer"
								required />
						</div>
						<p v-if="!manufacturer.isValid.value" class="help is-danger">This field is invalid.</p>
					</div>
					<div class="field">
						<label class="label">Model:</label>
						<div class="control">
							<input
								v-model="model.value.value"
								:class="{ 'is-danger': !model.isValid.value }"
								class="input"
								type="text"
								placeholder="Model"
								required />
						</div>
						<p v-if="!model.isValid.value" class="help is-danger">This field is invalid.</p>
					</div>
					<button type="submit" class="button is-primary">Add Airplane</button>
				</form>
			</div>
			<div class="column"></div>
		</div>
	</Container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import Container from '@/common/components/Container.vue';
import HttpClient from '@/common/data/httpClient';
import AddAirplaneRequest from './AddAirplaneRequest';
import router from '@/router';
import useInput from './useInput';
import RequiredValidator from './RequiredValidator';
import { ref } from 'vue';

export default defineComponent({
	name: 'AddAirplane',
	components: { Container },
	setup() {
		let manufacturer = useInput(ref(''), [new RequiredValidator<string>()]);
		let model = useInput(ref(''), [new RequiredValidator<string>()]);

		const onSubmit = (event: Event) => {
			var request: AddAirplaneRequest = {
				manufacturer: manufacturer.value.value,
				model: model.value.value,
			};

			HttpClient.Post<AddAirplaneRequest>(request, '').then(() => router.push({ name: 'AirplanesIndex' }));
			event.preventDefault();
		};

		return {
			manufacturer,
			model,
			onSubmit,
		};
	},
	// data() {
	// 	return {
	// 		manufacturer: new String(''),
	// 		manufacturerIsValid: new Boolean(true),
	// 		model: new String(''),
	// 		modelIsValid: new Boolean(true),
	// 	};
	// },
	// methods: {
	// 	onSubmit(event: Event) {
	// 		var request: AddAirplaneRequest = {
	// 			manufacturer: this.$data.manufacturer.toString(),
	// 			model: this.$data.model.toString(),
	// 		};

	// 		HttpClient.Post<AddAirplaneRequest>(request, '').then(() => router.push({ name: 'AirplanesIndex' }));
	// 		event.preventDefault();
	// 	},
	// 	validateManufacturer(event: Event) {
	// 		this.$data.manufacturerIsValid = (event.target as HTMLInputElement).validity.valid;
	// 	},
	// 	validateModel(event: Event) {
	// 		this.$data.modelIsValid = (event.target as HTMLInputElement).validity.valid;
	// 	},
	// },
});
</script>
