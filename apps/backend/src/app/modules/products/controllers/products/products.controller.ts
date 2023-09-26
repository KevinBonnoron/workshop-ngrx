import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../../dtos';
import { ProductsService } from '../../services';

@Controller('/products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() productDto: CreateProductDto) {
    return this.productsService.create(productDto);
  }

  @Put('/:id')
  update(@Param('id', new ParseIntPipe()) id: number, @Body() productDto: UpdateProductDto) {
    return this.productsService.update(id, productDto);
  }

  @Delete('/:id')
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.productsService.remove(id);
  }
}
