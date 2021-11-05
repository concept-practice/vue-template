<template>
	<div class="container"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
const Container = defineComponent({
	name: 'Container',
});

export default Container;
</script>
