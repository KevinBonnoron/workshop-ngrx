import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ProductsFacade, ProductsService } from '@workshop/products-data-access';
import { CardComponent } from '../card/card.component';

@Component({
  standalone: true,
  imports: [MatButtonModule, CardComponent, NgFor, NgIf, RouterLink, AsyncPipe],
  selector: 'products-ui-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  private readonly productsFacade = inject(ProductsFacade);

  readonly products$ = this.productsService.findAll();

  ngOnInit(): void {
    this.productsFacade.load();
  }
}
