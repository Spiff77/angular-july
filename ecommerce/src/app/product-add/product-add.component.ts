import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {group} from '@angular/animations';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  theForm!: FormGroup

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.theForm = this.fb.group({
      name: "",
      category: "",
      description: "",
      price: 0,
      promo: 0,
      active: false
    })
  }
}
