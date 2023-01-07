import type { Ref } from "vue";
import type IValid from "./IValid";

export default interface IUseInput<T> extends IValid {
  state: Ref<T>;
  error: Ref<string>;
  handleEvent: (event: Event) => void;
}
