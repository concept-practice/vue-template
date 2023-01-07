import { onMounted, type Ref } from "vue";
import useState from "./useState";

export default function useMountedFetch<T>(initial: T, url: string): Ref<T> {
  const [state, setState] = useState<T>(initial);

  onMounted(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(url);

      const body = (await response.json()) as string;

      setState(body as unknown as T);
    };

    void fetchData();
  });

  return state;
}
