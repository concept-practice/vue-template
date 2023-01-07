import { ref, type Ref } from "vue";

export default function useState<T>(initial: T): [Ref<T>, (newState: T) => void] {
  const currentState = ref<T>(initial) as Ref<T>;

  const setState = (newState: T): void => {
    currentState.value = newState;
  };

  return [currentState, setState];
}
