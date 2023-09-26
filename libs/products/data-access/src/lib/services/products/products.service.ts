import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product, Products } from '@workshop/shared';

@Injectable()
export class ProductsService {
  private readonly httpClient = inject(HttpClient);

  findAll() {
    return this.httpClient.get<Products>('http://localhost:3000/api/products');
  }

  findOne(id: number) {
    return this.httpClient.get<Product>(`http://localhost:3000/api/products/${id}`);
  }

  create(product: Omit<Product, 'id'>) {
    return this.httpClient.post('http://localhost:3000/api/products', product);
  }

  update(product: Product) {
    return this.httpClient.put(`http://localhost:3000/api/products/${product.id}`, product);
  }

  remove(id: number) {
    return this.httpClient.delete(`http://localhost:3000/api/products/${id}`);
  }
}
