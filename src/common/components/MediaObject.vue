<template>
	<article class="media"><slot></slot></article>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
	name: 'MediaObject',
});
</script>
