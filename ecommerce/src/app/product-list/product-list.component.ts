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

/*
  Créer le composent DetailComponent
    product: Product
    hint:
      ngOnInit(): void {
        let id = Number(this.activeRoute.snapshot.paramMap.get('id') ?? -1);

        if(Number(id) >= 1){
           this.productService.findOne(id).subscribe(p => this.product = p)
       }
  }

  Nouvelle methode dans le service ProductHttpService
    findOne(id: number):  Observable<Product> -->http://localhost:8086/learn/api/products/[idInRouter(:id)]
      http.get<Product>(...)

  Ajouter une route dans AppModule
    {path: 'products/:id', compoenent: DetailComponent}


 */
