import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Product} from '../model/product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  product!: Product

  @Output()
  out = new EventEmitter<Product>

  constructor(private router: Router) {
  }

  @HostListener('click')
  navigateToDetail(){
    this.router.navigate(['/products', this.product.id])
  }
}
