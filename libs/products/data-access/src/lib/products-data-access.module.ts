import { NgModule } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { ProductsEffects } from './+state/products.effects';
import { ProductsFacade } from './+state/products.facade';
import * as fromProducts from './+state/products.reducer';
import { ProductsService } from './services';

@NgModule({
  providers: [
    provideState(
      fromProducts.PRODUCTS_FEATURE_KEY,
      fromProducts.productsReducer
    ),
    provideEffects([ProductsEffects]),
    ProductsService,
    ProductsFacade
  ],
})
export class ProductsDataAccessModule {}
