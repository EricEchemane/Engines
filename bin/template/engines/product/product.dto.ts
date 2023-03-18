import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
	@IsNotEmpty()
	property!: string;
}

export class UpdateProductDto implements Partial<CreateProductDto> {}
