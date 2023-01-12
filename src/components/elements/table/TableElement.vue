<template>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th v-for="header in headers.toHeader()" :key="header" class="has-text-centered">
          {{ header }}
        </th>
      </tr>
    </thead>
    <slot></slot>
  </table>
</template>

<script setup lang="ts">
import type ITableHeader from "./ITableHeader";

export interface TableElementProperties {
  headers: ITableHeader;
}

defineProps<TableElementProperties>();
</script>
