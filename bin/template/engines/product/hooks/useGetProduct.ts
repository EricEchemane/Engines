import { useQuery } from '@tanstack/react-query';

export function useGetProduct(id: string) {
	return useQuery({
		queryKey: ['product', id],
		queryFn: async () => {
			const res = await fetch('/api/product/' + id);
			const data = await res.json();
			if (res.ok) return data;
			return Promise.reject(data);
		},
	});
}
