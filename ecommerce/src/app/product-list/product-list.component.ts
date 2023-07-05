import { Component } from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  selectedProduct: Product | undefined

  product1: Product = {
    id: 10,
    name: 'Frank Zappa',
    category: 'Music',
    active: true,
    price: 20,
    promo: .1,
    description: "blablabla bla bla bla blabla bla"
  }


  product2: Product = {
    id: 12,
    name: 'Motorhead',
    category: 'Music',
    active: true,
    price: 15,
    promo: .1,
    description: "bliblib blib bllibbliilb lblib"
  }



  receiveSelectedProduct(product: Product){
    this.selectedProduct = product
  }

}
