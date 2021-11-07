import { Ref, ref, watch } from '@vue/runtime-dom';
import IUseInput from './IUseInput';
import IValidator from './IValidator';

export default function useInput<T>(defaultValue: Ref<T>, validators: Array<IValidator<T>>): IUseInput<T> {
	const value = defaultValue;
	const isValid = ref<boolean>(true);

	watch(value, () => {
		isValid.value = validators.every((x) => x.Validate(value.value));
		console.log(isValid.value);
	});

	return {
		value,
		isValid,
	};
}
