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

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoryListComponent,
    HomeComponent,
    ProductComponent,
    FeaturesComponent,
    CategoryColorsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
