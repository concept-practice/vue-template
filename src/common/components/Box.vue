<template>
	<div class="box"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
	name: 'Box',
});
</script>
