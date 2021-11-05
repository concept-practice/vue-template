<template>
	<Container>
		<Box>
			<MediaObject>
				<div class="media-content">
					<div class="content">
						<p>Id: {{ airplane.id }}</p>
						<p>Manufacturer: {{ airplane.manufacturer }}</p>
						<p>Model: {{ airplane.model }}</p>
					</div>
				</div>
			</MediaObject>
		</Box>
	</Container>
</template>
<script lang="ts">
import HttpClient from '@/common/data/httpClient';
import { defineComponent } from '@vue/runtime-core';
import Airplane from './Airplane';
import MediaObject from '@/common/components/MediaObject.vue';
import Box from '@/common/components/Box.vue';
import AirplaneViewModel from './AirplaneViewModel';
import Container from '../../common/components/Container.vue';

export default defineComponent({
	name: 'IndividualAirplaneDetails',
	components: {
		Box,
		MediaObject,
		Container,
	},
	props: {
		identifier: { type: String, default: '' },
	},
	data() {
		return {
			airplane: new AirplaneViewModel(),
		};
	},
	mounted(): void {
		HttpClient.Get<Airplane>(this.$props.identifier).then((x) => (this.$data.airplane = x));
	},
});
</script>

<style></style>
