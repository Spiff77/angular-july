import { Component } from '@angular/core';
import {Product} from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product: Product = {
    id: 10,
    price: 15,
    category: 'Music',
    name: 'Black Sabbath',
    active: true,
    promo: .2,
    description: 'Un cd qu\'il est bien pour l\'écouter'
  }

  toggleActive() {
    this.product.active = !this.product.active
  }
}
