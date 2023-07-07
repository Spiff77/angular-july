import {Supplier} from './supplier.model';

export interface Product {
  id: number,
    active: boolean,
    name: string,
    category: string,
    description: string,
    price: number,
    promo: number,
    supplier?: Supplier
}
