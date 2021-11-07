import HttpClient from '@/common/data/httpClient';
import IDataFetch from './IDataFetch';

export default function useDataFetch(): IDataFetch {
	const GetAll = async <T>(uri = ''): Promise<T> => {
		return await HttpClient.Get(uri);
	};

	return {
		GetAll,
	};
}
