import { Ref } from '@vue/runtime-dom';

export default interface IUseInput<T> {
	value: Ref<T>;
	isValid: Ref<boolean>;
}
