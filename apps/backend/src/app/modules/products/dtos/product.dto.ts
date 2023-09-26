import { Product } from '@workshop/shared';

export type CreateProductDto = Omit<Product, 'id'>;

export type UpdateProductDto = CreateProductDto;
