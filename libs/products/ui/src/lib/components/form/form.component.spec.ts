import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let fixture: ComponentFixture<FormComponent>;
  let component: FormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormComponent],
    });

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snaptshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
