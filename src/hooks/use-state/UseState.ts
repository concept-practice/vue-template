import { ref, Ref } from "vue";

export default function useState<T>(
  initial: T
): [state: Ref<T>, setState: (newState: T) => void] {
  const state = ref<T>(initial) as Ref<T>;

  const setState = (newState: T): void => {
    state.value = newState;
  };

  return [state, setState];
}
