import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponent implements OnInit {
  productId: number | undefined;

  constructor(private route: ActivatedRoute,private router:Router,private location:Location) {

  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];

    //read query string

    this.route.queryParams.subscribe(params=>{
      console.log(params)
    });
  }

  goToList():void{
    //this.router.navigate(["/products"]);
    this.location.back();
  }
}
