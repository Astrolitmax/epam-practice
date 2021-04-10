import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
	@ApiProperty({
		description: 'The name of product',
		required: true
	})
  readonly title: string;

	@ApiProperty({
		description: 'The product`s description',
		default: '',
		required: false
	})
  readonly description: string;

	@ApiProperty({
		description: 'The product`s price',
		default: 0,
		required: false
	})
  readonly price: number;

	@ApiProperty({
		description: 'Number of products in stock',
		default: 0,
		required: false
	})
  readonly count: number;
}