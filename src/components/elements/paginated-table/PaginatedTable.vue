<template>
  <div>
    <TableElement :headers="viewModel">
      <tbody>
        <slot></slot>
      </tbody>
    </TableElement>
    <div class="is-flex is-justify-content-space-between">
      <nav class="pagination is-small">
        <ul class="pagination-list">
          <li v-for="(_, index) in pageCount" :key="index">
            <button
              class="pagination-link"
              :class="page === index + 1 ? 'is-current' : ''"
              @click="handlePage(index + 1)"
            >
              {{ index + 1 }}
            </button>
          </li>
        </ul>
      </nav>
      <div class="is-flex">
        <label :for="itemCountId" class="label has-text-weight-semibold mr-2">Page Size:</label>
        <div class="control mr-2">
          <div class="select is-small">
            <select
              :id="itemCountId"
              :value="pageSize"
              @change="handleItemCount"
              @blur="handleItemCount"
            >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
        <span>{{ currentMin }} - {{ currentMax }} of {{ elementCount }} items</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useState from "@/hooks/useState";
import { computed } from "vue";
import type ITableHeader from "../table/ITableHeader";
import TableElement from "../table/TableElement.vue";

export interface PaginatedTableProperties {
  viewModel: ITableHeader;
  elementCount: number;
  updateItems: (skip: number, take: number) => void;
}

const properties = defineProps<PaginatedTableProperties>();

const itemCountId = Math.random().toString();

const [page, setPage] = useState<number>(1);
const [pageSize, setPageSize] = useState<number>(10);

const handleItemCount = (event: Event): void => {
  const value = Number.parseInt((event.target as HTMLInputElement).value);

  setPage(1);
  setPageSize(value);

  properties.updateItems((page.value - 1) * pageSize.value, pageSize.value);
};

const handlePage = (nextPage: number): void => {
  setPage(nextPage);

  properties.updateItems((page.value - 1) * pageSize.value, pageSize.value);
};

const currentMin = computed<number>(() => page.value * pageSize.value - pageSize.value + 1);
const currentMax = computed<number>(() => {
  if (page.value * pageSize.value > properties.elementCount) {
    return properties.elementCount;
  }

  return page.value * pageSize.value;
});

const pageCount = computed<number>(() => Math.ceil(properties.elementCount / pageSize.value));
</script>
