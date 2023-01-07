import { computed, type Ref } from "vue";
import type IValid from "../interfaces/IValid";

export default function useCanSubmit(inputs: Array<IValid>): Ref<boolean> {
  return computed<boolean>(() => inputs.some((input) => !input.valid.value));
}
