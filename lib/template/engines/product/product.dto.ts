import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
	@IsNotEmpty()
	property!: string;
}

export type UpdateProductDto = Partial<CreateProductDto>;
