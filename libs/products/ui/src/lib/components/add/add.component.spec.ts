import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsService } from '@workshop/products-data-access';
import { Product } from '@workshop/shared';
import { of } from 'rxjs';
import { AddComponent } from './add.component';

class BlankComponent {}

describe('AddComponent', () => {
  let fixture: ComponentFixture<AddComponent>;
  let component: AddComponent;
  let productsService: ProductsService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: 'list', component: BlankComponent }]),
        AddComponent
      ],
      providers: [
        { provide: ProductsService, useValue: { create: jest.fn((product: Product) => of(product)) } }
      ]
    });

    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    productsService = TestBed.inject(ProductsService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call endpoint when onSave is called', () => {
    const productServiceCreateSpy = jest.spyOn(productsService, 'create');
    const routerNavigateByUrlSpy = jest.spyOn(router, 'navigateByUrl').mockImplementation(() => Promise.resolve(true));

    const product: Omit<Product, 'id'> = { name: 'Test' };
    component.onSave(product);

    expect(productServiceCreateSpy).toHaveBeenCalledWith(product);
    expect(routerNavigateByUrlSpy).toHaveBeenCalledWith('list');
  });

  it('should match snaptshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
