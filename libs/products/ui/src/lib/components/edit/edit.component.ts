import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '@workshop/products-data-access';
import { Product } from '@workshop/shared';
import { switchMap } from 'rxjs';
import { FormComponent } from '../form/form.component';

@Component({
  standalone: true,
  imports: [MatButtonModule, FormComponent, NgIf, AsyncPipe],
  templateUrl: './edit.component.html',
})
export class EditComponent {
  private readonly router = inject(Router);
  
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productsService = inject(ProductsService);

  readonly product$ = this.activatedRoute.params.pipe(switchMap(({ id }) => this.productsService.findOne(id)));

  onSave({ id, name }: Product) {
    this.productsService.update({ id, name }).subscribe(() => this.router.navigateByUrl('list'));
  }

  onDelete() {
    this.product$.pipe(
      switchMap((product) => this.productsService.remove(product.id))
    ).subscribe(() => this.router.navigateByUrl('list'));
  }
}
