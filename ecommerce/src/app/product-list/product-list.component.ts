import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductHttpService} from '../product-http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  selectedProduct: Product | undefined

  filteringStr = ''
  products: Product[] = []

  constructor(private ps: ProductHttpService) {}

  ngOnInit(): void {
    this.ps.findAll().subscribe(products => this.products = products)
  }

  receiveSelectedProduct(product: Product){
    this.selectedProduct = product
  }

  getProductsFiltered(): Product[] {
    return this.products.filter(prod => prod.name.toLowerCase().includes(this.filteringStr.toLowerCase()))
  }


}
