import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { ProductsActions } from './products.actions';

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.load),
      switchMap(() =>
        of(ProductsActions.loadSuccess({ products: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(ProductsActions.loadFailure({ error }));
      })
    )
  );
}
