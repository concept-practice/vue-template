<template>
	<Container> At home!</Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Container from '@/common/components/Container.vue';

const Home = defineComponent({
	name: 'Home',
	components: { Container },
});

export default Home;
</script>
