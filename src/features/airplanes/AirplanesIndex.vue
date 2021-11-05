<template>
	<Container><AirplaneDetails v-for="(plane, index) in airplanes" :key="index" :airplane="plane" :index="index" /></Container>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Airplane from './Airplane';
import AirplaneDetails from './AirplaneDetails.vue';
import Container from '@/common/components/Container.vue';
export default defineComponent({
	name: 'AirplanesIndex',
	components: { AirplaneDetails, Container },
	props: {
		airplanes: { type: Array as PropType<Array<Airplane>>, default: () => new Array<Airplane>() },
	},
});
</script>
