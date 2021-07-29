import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';

import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: '**', component: Error404Component
    },
    {
      path: "products/create",
      component: ProductCreateComponent
    },
    {
      path: "products/delete/:id",
      component: ProductDeleteComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class Routing{ }
