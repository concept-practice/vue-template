import type { IValid } from "@/components/Index";
import { computed, type Ref } from "vue";

export default function useCanSubmit(inputs: Array<IValid>): Ref<boolean> {
  return computed<boolean>(() => inputs.some((input) => !input.valid.value));
}
