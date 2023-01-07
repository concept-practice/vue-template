import { ValueDefaults } from "@/utilities/ValueDefaults";
import type { IUseInput } from "../interfaces/IUseInput";
import useInput from "./UseInput";

export default function useTextInput(initialValue = ValueDefaults.String): IUseInput<string> {
  return useInput(initialValue, (value) => value);
}
