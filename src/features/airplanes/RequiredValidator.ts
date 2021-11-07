import IValidator from './IValidator';

export default class RequiredValidator<T> implements IValidator<T> {
	Validate(value: T): boolean {
		switch (typeof value) {
			case 'string':
				return value != undefined && value != null && value != '';
		}

		return false;
	}
}
