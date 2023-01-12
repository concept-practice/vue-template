import PaginatedTable from '@/components/elements/paginated-table/PaginatedTable.vue';

<template>
  <div class="container">
    <PaginatedTable :view-model="airplanes[0]" :element-count="100" :update-items="updateItems">
      <tr v-for="plane in airplanes" :key="plane.registration" class="has-text-centered">
        <td>{{ plane.registration }}</td>
        <td>{{ plane.manufacturer }}</td>
        <td>{{ plane.model }}</td>
        <td>{{ plane.range }}</td>
        <td>{{ plane.capacity }}</td>
      </tr>
    </PaginatedTable>
  </div>
</template>

<script setup lang="ts">
import PaginatedTable from "@/components/elements/paginated-table/PaginatedTable.vue";
import useState from "@/hooks/useState";
import { onMounted } from "vue";
import AirplaneViewModel from "./AirplaneViewModel";

const [airplanes, setAirplanes] = useState<Array<AirplaneViewModel>>([
  AirplaneViewModel.defaultViewModel(),
]);

onMounted(() => {
  updateItems(0, 10);
});

const updateItems = (skip: number, take: number): void => {
  const planes: Array<AirplaneViewModel> = [];

  for (var index = 0; index < 100; index++) {
    planes.push(
      new AirplaneViewModel({
        registration: `N${Math.floor(Math.random() * 999)
          .toPrecision(3)
          .toString()
          .toLocaleUpperCase()}NA`,
        manufacturer: "Boeing",
        model: "737-8",
        range: 3800,
        capacity: 174,
      })
    );
  }

  const result = planes.slice(skip, skip - 1 + take);

  setAirplanes(result);
};
</script>
