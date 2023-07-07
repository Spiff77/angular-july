import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {group} from '@angular/animations';
import {ProductHttpService} from '../product-http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  theForm!: FormGroup
  formSubmitted = false;

  constructor(private fb: FormBuilder,
              private productService: ProductHttpService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.theForm = this.fb.nonNullable.group({
      name: ["The name", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      category: "",
      description: "",
      price: [0, Validators.min(10)],
      promo: 0,
      active: false
    })
  }

  addProduct(){
    this.formSubmitted = true;
    if(this.theForm.valid){
      this.productService.add(this.theForm.value)
        .subscribe(v=>this.theForm.reset());
    }

    //TODO: redirect to products.

  }
}
