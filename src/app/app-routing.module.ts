import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {ProductComponent} from './product-component/product-component.component';
import {FeaturesComponent} from "./features/features.component";
import {CategoryColorsComponent} from "./category-colors/category-colors.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {CustomerInfoComponent} from "./customer-info/customer-info.component";
import {EmployeInfoComponent} from "./employe-info/employe-info.component";
import {FormReactiveComponent} from "./form-reactive/form-reactive.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'products/info/', component: ProductComponent},
  {
    path: 'categories', component: CategoryListComponent,
    children: [
      {path: 'features', component:FeaturesComponent},
      {path: 'colors', component:CategoryColorsComponent},
      {path: '', redirectTo:'features',pathMatch:'full'}
    ]
  },
  {path:'customer/info',component:CustomerInfoComponent},
  {path:'Employee/info',component:EmployeInfoComponent},
  {path:'form',component:FormReactiveComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
