import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsService } from '@workshop/products-data-access';
import { Product } from '@workshop/shared';
import { of } from 'rxjs';
import { EditComponent } from './edit.component';

class BlankComponent {}

describe('EditComponent', () => {
  let fixture: ComponentFixture<EditComponent>;
  let component: EditComponent;
  let productsService: ProductsService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: 'list', component: BlankComponent }]),
        EditComponent
      ],
      providers: [
        { provide: ProductsService, useValue: {
          findOne: jest.fn(),
          update: jest.fn(),
          remove: jest.fn(),
        } },
        { provide: ActivatedRoute, useValue: { params: of({ id: 0 }) } },
      ]
    });

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    productsService = TestBed.inject(ProductsService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call endpoint when onSave is called', () => {
    const productServiceUpdateSpy = jest.spyOn(productsService, 'update').mockImplementation(() => of({ id: 0, name: 'UpdatedTest' }));
    const routerNavigateByUrlSpy = jest.spyOn(router, 'navigateByUrl').mockImplementation(() => Promise.resolve(true));

    const product: Product = { id: 0, name: 'UpdatedTest' };
    component.onSave(product);

    expect(productServiceUpdateSpy).toHaveBeenCalledWith(product);
    expect(routerNavigateByUrlSpy).toHaveBeenCalledWith('list');
  });

  it('should call endpoint when onDelete is called', () => {
    jest.spyOn(productsService, 'findOne').mockImplementation(() => of({ id: 0, name: 'Test' }));
    const productServiceRemoveSpy = jest.spyOn(productsService, 'remove').mockImplementation(() => of({ id: 0, name: 'Test' }));
    const routerNavigateByUrlSpy = jest.spyOn(router, 'navigateByUrl').mockImplementation(() => Promise.resolve(true));

    const product: Product = { id: 0, name: 'UpdatedTest' };
    component.onDelete();

    expect(productServiceRemoveSpy).toHaveBeenCalledWith(product.id);
    expect(routerNavigateByUrlSpy).toHaveBeenCalledWith('list');
  });

  it('should match snaptshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
