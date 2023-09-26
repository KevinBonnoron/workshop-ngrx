import { Module } from '@nestjs/common';
import { ProductsModule } from './modules';

@Module({
  imports: [ProductsModule],
})
export class AppModule { }
