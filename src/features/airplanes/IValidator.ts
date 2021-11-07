export default interface IValidator<T> {
	Validate(value: T): boolean;
}
