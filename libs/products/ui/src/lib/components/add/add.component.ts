import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '@workshop/products-data-access';
import { Product } from '@workshop/shared';
import { FormComponent } from '../form/form.component';

@Component({
  standalone: true,
  imports: [FormComponent],
  templateUrl: './add.component.html',
})
export class AddComponent {
  private readonly router = inject(Router);
  private readonly productsService = inject(ProductsService);

  onSave({ name }: Omit<Product, 'id'>) {
    this.productsService.create({ name }).subscribe(() => this.router.navigateByUrl('list'));
  }
}
