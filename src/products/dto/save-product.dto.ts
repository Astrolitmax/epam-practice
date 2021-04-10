import { ApiProperty } from "@nestjs/swagger";

export class SaveProductDto {
	@ApiProperty({
		description: 'The name of product',
		required: false
	})
  readonly title: string;

	@ApiProperty({
		description: 'The product`s description',
		required: false
	})
  readonly description: string;

	@ApiProperty({
		description: 'The product`s price',
		required: false
	})
  readonly price: number;

	@ApiProperty({
		description: 'Number of products in stock',
		required: false
	})
  readonly count: number;
}