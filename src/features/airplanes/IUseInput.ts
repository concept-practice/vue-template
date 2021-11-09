import { Ref } from '@vue/runtime-dom';

export default interface IUseInput<T> {
	value: Ref<T>;
	setValue(value: T): void;
	isValid: Ref<boolean>;
	setIsValid(valid: boolean): void;
}
