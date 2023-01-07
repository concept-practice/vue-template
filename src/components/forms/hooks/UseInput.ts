import type { IUseInput } from "@/components/Index";
import useState from "@/hooks/useState";
import { ValueDefaults } from "@/utilities/ValueDefaults";

export default function useInput<T>(
  initialValue: T,
  mappingFunction: (value: string) => T
): IUseInput<T> {
  const [state, setState] = useState<T>(initialValue);
  const [valid, setValid] = useState<boolean>(ValueDefaults.Boolean);
  const [error, setError] = useState<string>(ValueDefaults.String);

  const handleEvent = (event: Event): void => {
    const element = event.target as HTMLInputElement;

    setState(mappingFunction(element.value));
    setValid(element.validity.valid);
    setError(element.validationMessage);
  };

  return { state, valid, error, handleEvent };
}
