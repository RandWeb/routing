import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product: any;

  constructor(private route:Router) {
  }

  goToProductWithQueryParam(product: { id: number; title: string }):void {
    this.route.navigate(['products/info'],{queryParams:{id:product.id,title:product.title}})
  }
}
