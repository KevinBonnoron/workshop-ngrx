import { NgModule } from '@angular/core';
import { CardComponent, ListComponent } from './components';

const COMPONENTS = [
  CardComponent,
  ListComponent
] as const;

@NgModule({
  imports: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ProductsUiModule {}
