import { Products } from './products.interface';

export type CreateProduct = Omit<Products, 'id'>;