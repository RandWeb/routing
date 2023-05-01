import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product-component/product-component.component';
import { FeaturesComponent } from './features/features.component';
import { CategoryColorsComponent } from './category-colors/category-colors.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EmployeInfoComponent } from './employe-info/employe-info.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoryListComponent,
    HomeComponent,
    ProductComponent,
    FeaturesComponent,
    CategoryColorsComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    CustomerInfoComponent,
    CustomerAddressComponent,
    EmployeInfoComponent,
    FormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
