import { useQuery } from '@tanstack/react-query';

export function useGetProducts() {
	return useQuery({
		queryKey: ['products'],
		queryFn: async () => {
			const res = await fetch('/api/product');
			const data = await res.json();
			if (res.ok) return data;
			return Promise.reject(data);
		},
	});
}
