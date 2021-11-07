export default interface IDataFetch {
	GetAll<T>(): Promise<T>;
}
