import {Injectable} from '@angular/core';
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1, "Product A"),
    new Product(2, "Product B"),
    new Product(3, "Product C"),
    new Product(4, "Product D"),
    new Product(5, "Product E"),
  ];

  constructor() {
  }

  getAll(): Product[] {
    return this.products;
  }
  get(id:number):Product{
    return this.products.find(p=>p.id == id)
  }
}
