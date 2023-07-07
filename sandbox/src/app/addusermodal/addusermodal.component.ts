import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpUserService} from '../http-user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-addusermodal',
  templateUrl: './addusermodal.component.html',
  styleUrls: ['./addusermodal.component.scss']
})
export class AddusermodalComponent implements OnInit {

  myForm!: FormGroup
  formSubmitted = false

  @Input()
  title=''

  constructor(private fb: FormBuilder,
              private userService: HttpUserService,
              public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: [''],
      age: [0],
      musicstyles: this.fb.array(['Rock','Blues']),
      address: this.fb.group({
        name:'',
        streetname:'',
        streetnumber: 0,
        city: ''
      })
    })
  }

  getMusicStylesControl(): FormArray {
    return this.myForm.get("musicstyles") as FormArray
  }
  /*
  /products/add --> ProductAddComponent

   */
  submit() {
    this.formSubmitted = true
    if(this.myForm.valid){
        this.activeModal.close({
          reason: 'ADD',
          data: this.myForm.value
        })
    }
  }

  cancel(){
    this.activeModal.close({
      reason: 'CANCEL',
      data: undefined
    })
  }

  addStyle() {
    this.getMusicStylesControl().push(new FormControl(''))
  }

  removeStyle(id: number){
    this.getMusicStylesControl().removeAt(id)
  }

}
