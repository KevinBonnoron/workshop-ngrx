import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CardComponent } from './card.component';

class BlankComponent {}

describe('CardComponent', () => {
  let fixture: ComponentFixture<CardComponent>;
  let component: CardComponent;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: 'edit/0', component: BlankComponent }]),
        CardComponent
      ]
    });

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call endpoint when onSave is called', () => {
    const routerNavigateSpy = jest.spyOn(router, 'navigate').mockImplementation(() => Promise.resolve(true));

    component.product = { id: 0, name: 'Test' };
    component.onClick();

    expect(routerNavigateSpy).toHaveBeenCalledWith(['/edit/', 0]);
  });

  it('should match snaptshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
