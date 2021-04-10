import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { SaveProductDto } from './dto/save-product.dto';
import { ProductService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('')
export class ProductsController {
  constructor(private readonly productsService: ProductService) {

  }

  @Get()
  getAll(): Promise<Product[]> {
    return this.productsService.getAll();
  }

  @Get(':str/:id')
  getAlias(@Param() params): Promise<Product> {
    return this.productsService.getById(params.id);
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.getById(id);
  }

  @Post()
  create(@Body() createCatDto: CreateProductDto): Promise<Product> {
    console.log('createCatDto', createCatDto);
    return this.productsService.create(createCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
    return this.productsService.remove(id);
  }

  @Put(':id')
  save(@Body() obj: SaveProductDto, @Param('id') id: string): Promise<Product> {
    return this.productsService.update(id, obj);
  }
}
