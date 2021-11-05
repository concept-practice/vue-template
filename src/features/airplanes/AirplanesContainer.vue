<template>
	<AirplanesIndex :airplanes="airplanes" />
</template>

<script lang="ts">
import HttpClient from '@/common/data/httpClient';
import { defineComponent } from 'vue';
import Airplane from './Airplane';
import AirplanesIndex from './AirplanesIndex.vue';
export default defineComponent({
	name: 'AirplanesContainer',
	components: {
		AirplanesIndex,
	},
	data() {
		return {
			airplanes: new Array<Airplane>(),
		};
	},
	mounted() {
		HttpClient.Get<Array<Airplane>>().then((x) => (this.$data.airplanes = x));
	},
});
</script>
