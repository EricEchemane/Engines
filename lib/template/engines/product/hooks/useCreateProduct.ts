import { CreateProductDto } from '../product.dto';
import { useMutation } from '@tanstack/react-query';

export function useCreateProduct() {
	return useMutation({
		mutationFn: async (product: CreateProductDto) => {
			const res = await fetch('/api/product', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(product),
			});
			const data = await res.json();
			if (res.ok) return data;
			return Promise.reject(data);
		},
	});
}
