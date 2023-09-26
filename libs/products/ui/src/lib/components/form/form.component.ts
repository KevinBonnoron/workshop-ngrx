import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Product } from '@workshop/shared';

@Component({
  standalone: true,
  selector: 'products-ui-form',
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './form.component.html'
})
export class FormComponent implements OnChanges {
  private readonly formBuilder = inject(FormBuilder);

  readonly formGroup = this.formBuilder.nonNullable.group<Product>({
    id: 0,
    name: ''
  });

  @Input()
  product!: Product;

  @Output()
  readonly save = new EventEmitter<Product>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      this.formGroup.patchValue(this.product);
    }
  }
}
