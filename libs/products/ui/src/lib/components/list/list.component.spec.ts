import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsService } from '@workshop/products-data-access';
import { of } from 'rxjs';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let fixture: ComponentFixture<ListComponent>;
  let component: ListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [
        { provide: ProductsService, useValue: { findAll: jest.fn(() => of([])) } }
      ]
    });

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snaptshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
