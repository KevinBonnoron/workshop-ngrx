import { Injectable, NotFoundException } from '@nestjs/common';
import { Product, Products } from '@workshop/shared';
import { of } from 'rxjs';

const PRODUCTS: Products = [
  { id: 0, name: 'Bouteille d\'huile' },
  { id: 1, name: 'Papier toilette' },
  { id: 2, name: 'Eponge' },
  { id: 3, name: 'Ravioli' },
]

@Injectable()
export class ProductsService {
  findAll() {
    return of(PRODUCTS);
  }

  findOne(id: number) {
    return of(PRODUCTS.find((product) => product.id === id));
  }

  create(data: Omit<Product, 'id'>) {
    const product = { id: this.nextId(), ...data };
    PRODUCTS.push(product);
    return of(product);
  }

  update(id: number, data: Omit<Product, 'id'>) {
    const product = PRODUCTS.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException();
    }

    product.name = data.name;
    return of(product);
  }

  remove(id: number) {
    const index = PRODUCTS.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new NotFoundException();
    }

    const deleted = PRODUCTS[index];
    PRODUCTS.splice(index, 1);
    return of(deleted);
  }

  private nextId() {
    let id = PRODUCTS.length;
    while (PRODUCTS.some((product) => product.id === id)) {
      id++;
    }

    return id;
  }
}
