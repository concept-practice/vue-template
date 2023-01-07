import type { IUseInput } from "@/components/Index";
import { ValueDefaults } from "@/utilities/ValueDefaults";
import useInput from "./UseInput";

export default function useTextInput(initialValue = ValueDefaults.String): IUseInput<string> {
  return useInput<string>(initialValue, (value) => value);
}
