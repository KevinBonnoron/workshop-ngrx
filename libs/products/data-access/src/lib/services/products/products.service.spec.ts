import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Product, Products } from '@workshop/shared';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });

    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should call endpoint when calling findAll', () => {
    const products: Products = [{ id: 0, name: 'Test' }];

    service.findAll().subscribe((data) => expect(data).toStrictEqual(products));

    const req = httpTestingController.expectOne('http://localhost:3000/api/products');
    expect(req.request.method).toEqual('GET');
    req.flush(products);
  });

  it('should call endpoint when calling findOne', () => {
    const id = 0;
    const product: Product = { id, name: 'Test' };

    service.findOne(id).subscribe((data) => expect(data).toStrictEqual(product));

    const req = httpTestingController.expectOne(`http://localhost:3000/api/products/${id}`);
    expect(req.request.method).toEqual('GET');
    req.flush(product);
  });

  it('should call endpoint when calling create', () => {
    const product: Omit<Product, 'id'> = { name: 'Test' };
    const createdProduct = { id: 0, ...product };

    service.create(product).subscribe((data) => expect(data).toStrictEqual(createdProduct));

    const req = httpTestingController.expectOne(`http://localhost:3000/api/products`);
    expect(req.request.method).toEqual('POST');
    req.flush(createdProduct);
  });

  it('should call endpoint when calling update', () => {
    const id = 0;
    const product: Product = { id, name: 'TestUpdated' };

    service.update(product).subscribe((data) => expect(data).toStrictEqual(product));

    const req = httpTestingController.expectOne(`http://localhost:3000/api/products/${id}`);
    expect(req.request.method).toEqual('PUT');
    req.flush(product);
  });

  it('should call endpoint when calling remove', () => {
    const id = 0;
    const product: Product = { id, name: 'TestUpdated' };

    service.remove(id).subscribe((data) => expect(data).toStrictEqual(product));

    const req = httpTestingController.expectOne(`http://localhost:3000/api/products/${id}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(product);
  });
});
