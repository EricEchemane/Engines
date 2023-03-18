import {
	Body,
	createHandler,
	Get,
	Param,
	Patch,
	Post,
	ValidationPipe,
} from 'next-api-decorators';

import {
	CreateProductDto,
	UpdateProductDto,
} from '../../../engines/product/product.dto';

class Product {
	@Get()
	all() {
		return ['all products'];
	}

	@Get('/:id')
	product(@Param('id') id: string) {
		return { id };
	}

	@Post()
	store(@Body(ValidationPipe) body: CreateProductDto) {
		return body;
	}

	@Patch('/:id')
	update(
		@Param('id') id: string,
		@Body(ValidationPipe) body: UpdateProductDto
	) {
		return { body, id };
	}
}

export default createHandler(Product);
