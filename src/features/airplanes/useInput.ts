import { Ref, ref } from '@vue/runtime-dom';
import IUseInput from './IUseInput';

export default function useInput<T>(defaultValue: Ref<T>): IUseInput<T> {
	const value = defaultValue;
	const isValid = ref<boolean>(true);

	const setValue = (newValue: T): void => {
		value.value = newValue;
	};

	const setIsValid = (valid: boolean): void => {
		isValid.value = valid;
	};

	return {
		value,
		setValue,
		isValid,
		setIsValid,
	};
}
