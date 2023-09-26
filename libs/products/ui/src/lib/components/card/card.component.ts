import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Product } from '@workshop/shared';

@Component({
  standalone: true,
  imports: [MatCardModule],
  selector: 'products-ui-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  private readonly router = inject(Router);

  @Input()
  product!: Product;

  onClick() {
    this.router.navigate(['/edit/', this.product.id]);
  }
}
