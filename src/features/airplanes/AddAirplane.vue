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
								v-model="manufacturer"
								:class="{ 'is-danger': !manufacturerIsValid }"
								class="input"
								type="text"
								placeholder="Manufacturer"
								required
								@input="validateManufacturer" />
						</div>
						<p v-if="!manufacturerIsValid" class="help is-danger">This field is invalid.</p>
					</div>
					<div class="field">
						<label class="label">Model:</label>
						<div class="control">
							<input
								v-model="model"
								:class="{ 'is-danger': !manufacturerIsValid }"
								class="input"
								type="text"
								placeholder="Model"
								required
								@input="validateModel" />
						</div>
						<p v-if="!modelIsValid" class="help is-danger">This field is invalid.</p>
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

export default defineComponent({
	name: 'AddAirplane',
	components: { Container },
	data() {
		return {
			manufacturer: new String(''),
			manufacturerIsValid: new Boolean(true),
			model: new String(''),
			modelIsValid: new Boolean(true),
		};
	},
	methods: {
		onSubmit(event: Event) {
			var request: AddAirplaneRequest = {
				manufacturer: this.$data.manufacturer.toString(),
				model: this.$data.model.toString(),
			};

			HttpClient.Post<AddAirplaneRequest>(request, '').then(() => router.push({ name: 'AirplanesIndex' }));
			event.preventDefault();
		},
		validateManufacturer(event: Event) {
			this.$data.manufacturerIsValid = (event.target as HTMLInputElement).validity.valid;
		},
		validateModel(event: Event) {
			this.$data.modelIsValid = (event.target as HTMLInputElement).validity.valid;
		},
	},
});
</script>
