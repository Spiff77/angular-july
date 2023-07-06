import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../user.service';
import {HttpUserService} from '../http-user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{

  myForm!: FormGroup

  constructor(private fb: FormBuilder,
              private userService: HttpUserService) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: 'Toto',
      email: '',
      age: 0,
    })
  }
/*
/products/add --> ProductAddComponent

 */
  sendDataToApi() {
    console.log(this.myForm.value)
    this.userService.add(this.myForm.value).subscribe()
  }
}
