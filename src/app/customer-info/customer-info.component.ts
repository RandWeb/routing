import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerAddressComponent} from "../customer-address/customer-address.component";

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit{

  @ViewChild('firstName') firstName:any;
  @ViewChild('homeAddress') homeAddress:CustomerAddressComponent | undefined;

  ngOnInit(): void {
  }

  save():void {
    console.log(this.firstName['nativeElement']?.value);
    console.log(this.homeAddress?.homeAddress);
  }
}
