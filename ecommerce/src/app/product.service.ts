import { Injectable } from '@angular/core';
import {Product} from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [{
    id: 10,
    name: 'Frank Zappa',
    category: 'Music',
    active: true,
    price: 20,
    promo: .1,
    description: "blablabla bla bla bla blabla bla"
  }, {
    id: 12,
    name: 'Motorhead',
    category: 'Music',
    active: true,
    price: 15,
    promo: .1,
    description: "bliblib blib bllibbliilb lblib"
  }]

  constructor() { }

  findAll(): Product[] {
    return this.products
  }
}
