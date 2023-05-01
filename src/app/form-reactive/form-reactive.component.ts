import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  customerForm: any;

  constructor(private fb:FormBuilder) {
  }

  ngOnInit(): void {
    this.customerForm =  this.fb.group({
      firstName:['mehrdad',[Validators.required, Validators.minLength(4)]],
      lastName:['',[Validators.required]],
      customerCode:[''],
      email:['']
    });
  }/*  ngOnInit(): void {
    this.customerForm = new FormGroup({
      firstName: new FormControl('mehrdad', [Validators.required, Validators.minLength(4)]),
      lastName: new FormControl('', Validators.required),
      customerCode: new FormControl(''),
      email: new FormControl(''),
    });
  }*/

  save(): void {
    console.log(this.customerForm.value);
  }
}
