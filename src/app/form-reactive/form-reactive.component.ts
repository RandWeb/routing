import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  customerForm: any;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['mehrdad', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required]],
      customerCode: [''],
      email: [''],
      accountForm: this.fb.group({
        accountTitle: ['account title', Validators.required],
        accountNumber: [' number', Validators.required],
        sheba: ['1', Validators.required]
      }),
      addressList: this.fb.array([this.initAddressForm()])
    });
  }

  initAddressForm():FormGroup {
    return this.fb.group({
      type: [''],
      address:['']
    });
  }

  get accountInfoForm() {
    return this.customerForm.get('accountForm')
  }
  get addressListForm() {
    return this.customerForm.get('addressList') as FormArray;
  }

  /*  ngOnInit(): void {
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

  addNewAddress(event:MouseEvent) {
    event.preventDefault();
    this.addressListForm.push(this.initAddressForm())
  }

  removeAddress(event: MouseEvent,index:number) {
    event.preventDefault();
    this.addressListForm.removeAt(index)
  }
}
