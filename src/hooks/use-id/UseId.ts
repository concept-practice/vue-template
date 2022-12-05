import { onMounted, Ref } from "vue";
import useState from "../use-state/UseState";

export default function useId(): Ref<string> {
  const [id, setId] = useState<string>("");

  onMounted(() => {
    setId(Math.random().toString());
  });

  return id;
}
