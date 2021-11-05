import { AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';

export default class HttpClient {
	private static instance: AxiosInstance = axios.create({
		baseURL: 'https://localhost:44372/api/Airplane/',
		timeout: 1000,
		headers: {},
	});

	public static Get<T>(uri = ''): Promise<T> {
		return this.instance.get<T>(uri).then((x) => x.data);
	}

	public static Post<T>(request: T, uri: string): Promise<AxiosResponse> {
		return this.instance.post<T>(uri, request);
	}
}
