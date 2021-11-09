<template>
	<Container>
		<div class="columns">
			<div class="column"></div>
			<div class="column">
				<form @submit="onSubmit">
					<Input :label="'Manufacturer'" :placeholder="'Manufacturer'" :use-input="manufacturer" />
					<Input :label="'Model'" :placeholder="'Model'" :use-input="model" />
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
import { ref } from 'vue';
import Input from '../../common/components/Input.vue';

export default defineComponent({
	name: 'AddAirplane',
	components: { Container, Input },
	setup() {
		let manufacturer = useInput(ref(''));
		let model = useInput(ref(''));

		const onSubmit = async (event: Event) => {
			var request: AddAirplaneRequest = {
				manufacturer: manufacturer.value.value,
				model: model.value.value,
			};

			await HttpClient.Post<AddAirplaneRequest>(request, '');
			router.push({ name: 'AirplanesIndex' });
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
