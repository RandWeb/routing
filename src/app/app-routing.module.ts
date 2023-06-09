import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {ProductComponent} from './product-component/product-component.component';
import {FeaturesComponent} from "./features/features.component";
import {CategoryColorsComponent} from "./category-colors/category-colors.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

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
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
