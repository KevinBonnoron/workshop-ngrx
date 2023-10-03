import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ProductsEntity } from './products.models';

export const ProductsActions = createActionGroup({
  source: 'Products',
  events: {
    'Load': emptyProps(),
    'Load Success': props<{ products: ProductsEntity[] }>(),
    'Load Failure': props<{ error: any }>()
  }
});
