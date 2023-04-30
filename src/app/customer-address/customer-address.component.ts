import {Component, OnInit} from '@angular/core';
import {NgModel} from "@angular/forms";
@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.css']
})
export class CustomerAddressComponent implements OnInit{
  homeAddress:string = "gachasaran";

  ngOnInit(): void {
  }



}
