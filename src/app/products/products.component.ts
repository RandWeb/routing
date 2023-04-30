import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = ([] = [
    { id: 1, title: 'Product A' },
    { id: 2, title: 'Product B' },
    { id: 3, title: 'Product C' },
  ]);
constructor(private route:Router) {
}

  goToProductWithQueryParam(product: { id: number; title: string }):void {
    this.route.navigate(['products/info'],{queryParams:{id:product.id,title:product.title}})
  }
}
