<template>
	<AirplanesIndex :airplanes="airplanes" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import IDataFetch from '../star-wars/IDataFetch';
import useDataFetch from '../star-wars/useDataFetch';
import Airplane from './Airplane';
import AirplanesIndex from './AirplanesIndex.vue';
export default defineComponent({
	name: 'AirplanesContainer',
	components: {
		AirplanesIndex,
	},
	setup() {
		let airplanes = ref<Array<Airplane>>([]);

		const dataFetch: IDataFetch = useDataFetch();

		onMounted(() => dataFetch.GetAll<Array<Airplane>>().then((x) => (airplanes.value = x)));

		return {
			airplanes,
		};
	},
	// data() {
	// 	return {
	// 		airplanes: new Array<Airplane>(),
	// 	};
	// },
	// mounted() {
	// 	HttpClient.Get<Array<Airplane>>().then((x) => (this.$data.airplanes = x));
	// },
});
</script>
