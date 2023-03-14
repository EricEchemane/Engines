import { UpdateProductDto } from '../product.dto';
import { useMutation } from '@tanstack/react-query';

export function useUpdateProduct(id: string) {
	return useMutation({
		mutationFn: async (product: UpdateProductDto) => {
			const res = await fetch('/api/product/' + id, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(product),
			});
			const data = await res.json();
			if (res.ok) return data;
			return Promise.reject(data);
		},
	});
}
