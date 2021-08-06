import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { DeleteProductComponent } from './pages/delete-product/delete-product.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },

    { path: 'products/adicionar', component: AddProductComponent },
    { path: 'products/editar', component: UpdateProductComponent },
    { path: 'products/remover', component: DeleteProductComponent },

    {
      path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
      path: '**', component: Error404Component
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class Routing{ }
