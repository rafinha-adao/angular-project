import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { DeleteProductComponent } from './pages/delete-product/delete-product.component';

const routes: Routes = [
    { path: 'entrar', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'produtos', component: ProductsComponent },
    { path: 'contato', component: ContactComponent },
    { path: 'sobre', component: AboutComponent },

    { path: 'products/adicionar', component: AddProductComponent },
    { path: 'products/editar', component: UpdateProductComponent },
    { path: 'products/remover', component: DeleteProductComponent },

    {
      path: '', redirectTo: 'entrar', pathMatch: 'full'
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
