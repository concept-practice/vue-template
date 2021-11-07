<template>
	<Container> Planet </Container>
	<div class="columns">
		<div class="column"></div>
		<div class="column">
			<form>
				<input v-model="first" class="input" type="text" />
				<input v-model="last" class="input" type="text" />
			</form>
			<p class="content">{{ fullname }}</p>
		</div>
		<div class="column"></div>
	</div>
</template>

<script lang="ts">
import Container from '@/common/components/Container.vue';
import { defineComponent } from '@vue/runtime-core';

const Planet = defineComponent({
	name: 'Planet',
	components: {
		Container,
	},
	data() {
		return {
			first: 'John',
			last: 'Doe',
		};
	},
	computed: {
		fullname(): string {
			return `${this.first} ${this.last}`;
		},
	},
});

export default Planet;
</script>
