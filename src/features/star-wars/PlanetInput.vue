<template>
	<Container>
		<div class="columns">
			<div class="column"></div>
			<div class="column">
				<div class="field">
					<label class="label">Planet Name:</label>
					<div class="control">
						<input v-model="name" class="input" type="text" />
					</div>
				</div>
				<p class="content">Ref: {{ name }}</p>
				<AirplanesIndex :airplanes="airplanes" />
			</div>
			<div class="column"></div>
		</div>
	</Container>
</template>

<script lang="ts">
import Container from '@/common/components/Container.vue';
import { defineComponent, onMounted } from '@vue/runtime-core';
import { ref } from 'vue';
import Airplane from '../airplanes/Airplane';
import AirplanesIndex from '../airplanes/AirplanesIndex.vue';
import IDataFetch from './IDataFetch';
import useDataFetch from './useDataFetch';

const PlanetInput = defineComponent({
	name: 'PlanetInput',
	components: {
		Container,
		AirplanesIndex,
	},
	setup() {
		let name = ref<string>('');
		let airplanes = ref<Array<Airplane>>([]);

		const dataFetch: IDataFetch = useDataFetch();

		onMounted(async () => (airplanes.value = await dataFetch.GetAll<Array<Airplane>>()));

		return { name, airplanes };
	},
});

export default PlanetInput;
</script>
