<template>
	<Box>
		<MediaObject>
			<div class="media-content">
				<div class="content">
					<p>
						<strong>Fleet: {{ index + 1 }}</strong>
					</p>
					<p>Id: {{ airplane.id }}</p>
					<p>Manufacturer: {{ airplane.manufacturer }}</p>
					<p>Model: {{ airplane.model }}</p>
				</div>
				<nav class="level">
					<div class="level-left">
						<div class="level-item">
							<a class="button is-info" @click="toDetails()">Submit</a>
						</div>
					</div>
				</nav>
			</div>
		</MediaObject>
	</Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import MediaObject from '@/common/components/MediaObject.vue';
import Airplane from './Airplane';
import Box from '@/common/components/Box.vue';
import router from '@/router';

export default defineComponent({
	name: 'AirplaneDetails',
	components: { MediaObject, Box },
	props: {
		index: { type: Number, required: true },
		airplane: { type: Object as PropType<Airplane>, required: true },
	},
	methods: {
		toDetails() {
			router.push({ name: 'IndividualAirplaneDetails', params: { identifier: this.$props.airplane.id } });
		},
	},
});
</script>
