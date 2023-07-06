import {Component, OnInit} from '@angular/core';
import {ProductHttpService} from '../product-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../model/product.model';
import {logMessages} from '@angular-devkit/build-angular/src/tools/esbuild/utils';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  product!: Product;
  displayConfirmRemove = false;

  constructor(private productService: ProductHttpService,
              private activeRoute: ActivatedRoute,
              private notificationService: NotificationService,
              private router: Router) {}

  ngOnInit(): void {
    let id = Number(this.activeRoute.snapshot.paramMap.get('id') ?? -1);

    if(id >= 1)
      this.productService.findOne(id).subscribe(p => this.product = p)
  }

  deleteProduct() {
    this.productService.delete(this.product.id).subscribe(() =>
        this.notificationService.sendMessage()
     // this.router.navigateByUrl('/products')
    )

  }
}
