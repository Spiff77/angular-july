import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {group} from '@angular/animations';
import {ProductHttpService} from '../product-http.service';
import {Router} from '@angular/router';
import {Supplier} from '../model/supplier.model';
import {Observable} from 'rxjs';
import {SupplierHttpService} from '../supplier-http.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  theForm!: FormGroup
  formSubmitted = false;
  suppliers: Supplier[] = [];

  constructor(private fb: FormBuilder,
              private productService: ProductHttpService,
              private supplierService: SupplierHttpService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.theForm = this.fb.nonNullable.group({
      name: ["The name", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      category: "",
      description: "",
      price: [0, Validators.min(10)],
      promo: 0,
      active: false,
      supplier: this.fb.group({
        id: 0
      })
    })

    this.supplierService.findAll().subscribe( v => {
      this.suppliers = v
      this.theForm.get('supplier.id')?.setValue(v[0].id)
    })
  }

  addProduct(){
    this.formSubmitted = true;
    if(this.theForm.valid){
      this.productService.add(this.theForm.value)
        .subscribe(v=>{
          this.theForm.reset()

          // disable to make product-dashboard work
          this.router.navigateByUrl('/products')
        });
    }

    //TODO: redirect to products.

  }
}
