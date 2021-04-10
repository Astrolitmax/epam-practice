import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { SaveProductDto } from './dto/save-product.dto';
import { ProductService } from './products.service';
import { Product } from './schemas/product.schema';

@ApiTags('product')
@Controller('')
export class ProductsController {
  constructor(private readonly productsService: ProductService) {

  }

  @Get()
	@ApiResponse({
		status: 200,
		description: 'Return all products.',
		type: [Product]
	})
  getAll(): Promise<Product[]> {
    return this.productsService.getAll();
  }

  @Get(':id')
	@ApiResponse({
		status: 200,
		description: 'Return a product by its ID.',
		type: Product
	})
	@ApiResponse({
		status: 404,
		description: 'Not found.'
	})
  getOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.getById(id);
  }

  @Post()
	@ApiBody({ type: CreateProductDto })
	@ApiResponse({
		status: 201,
		description: 'The product has been successfully created.',
		type: Product
	})
  create(@Body() createCatDto: CreateProductDto): Promise<Product> {
    console.log('createCatDto', createCatDto);
    return this.productsService.create(createCatDto);
  }

  @Delete(':id')
	@ApiResponse({
		status: 200,
		description: 'Remove a product by its ID.',
		type: Product
	})
	@ApiResponse({
		status: 404,
		description: 'Not found.'
	})
  remove(@Param('id') id: string): Promise<Product> {
    return this.productsService.remove(id);
  }

  @Put(':id')
	@ApiBody({ type: SaveProductDto })
	@ApiResponse({
		status: 200,
		description: 'Update a product by its ID and passed fields.',
		type: Product
	})
	@ApiResponse({
		status: 404,
		description: 'Not found.'
	})
  save(@Body() obj: SaveProductDto, @Param('id') id: string): Promise<Product> {
    return this.productsService.update(id, obj);
  }
}
