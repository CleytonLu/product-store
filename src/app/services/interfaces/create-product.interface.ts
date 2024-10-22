import { Products } from './products.interface';

export type CreateProduct = Omit<Products, 'id'>;
export type UpdateProduct = Products;   
