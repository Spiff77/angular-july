import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {HttpUserService} from '../http-user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{

  myForm!: FormGroup
  formSubmitted = false

  constructor(private fb: FormBuilder,
              private userService: HttpUserService) {
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
      console.log(this.myForm.value)
      this.userService.add(this.myForm.value).subscribe()
    }
  }

  addStyle() {
    this.getMusicStylesControl().push(new FormControl(''))
  }

  removeStyle(id: number){
    this.getMusicStylesControl().removeAt(id)
  }
}
