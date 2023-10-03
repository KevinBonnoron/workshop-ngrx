import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ProductsEntity } from './products.models';

export const ProductsActions = createActionGroup({
  source: 'Products',
  events: {
    'load': emptyProps(),
    'load success': props<{ products: ProductsEntity[] }>(),
    'load failure': props<{ error: any }>()
  }
});
