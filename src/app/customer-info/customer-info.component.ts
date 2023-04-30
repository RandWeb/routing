import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CustomerAddressComponent} from "../customer-address/customer-address.component";

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit{

  @ViewChild('firstName') firstName:any;
  @ViewChild('homeAddress') homeAddress:CustomerAddressComponent | undefined;
  @ViewChildren(CustomerAddressComponent) addresses:QueryList<CustomerAddressComponent> | undefined;
  ngOnInit(): void {
  }

  save():void {
    console.log(this.firstName['nativeElement']?.value);
    console.log(this.homeAddress?.homeAddress);
    this.addresses?.forEach(add=> console.log(add.homeAddress))
  }
}
