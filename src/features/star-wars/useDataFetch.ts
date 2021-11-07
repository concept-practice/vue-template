import HttpClient from '@/common/data/httpClient';
import IDataFetch from './IDataFetch';

export default function useDataFetch(): IDataFetch {
	const GetAll = <T>(uri = ''): Promise<T> => {
		return HttpClient.Get(uri);
	};

	return {
		GetAll,
	};
}
