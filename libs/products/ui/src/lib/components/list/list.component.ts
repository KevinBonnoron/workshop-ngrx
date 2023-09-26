import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ProductsService } from '@workshop/products-data-access';
import { CardComponent } from '../card/card.component';

@Component({
  standalone: true,
  imports: [MatButtonModule, CardComponent, NgFor, NgIf, RouterLink, AsyncPipe],
  selector: 'products-ui-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  private readonly productsService = inject(ProductsService);

  readonly products$ = this.productsService.findAll();
}
