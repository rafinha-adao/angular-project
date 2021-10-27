import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/pages/login/login.component';
import { ManagerComponent } from '../app/pages/manager/manager.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
    { path: 'entrar', component: LoginComponent },
    { path: 'gerenciar', component: ManagerComponent },
    { path: 'home', component: HomeComponent },
    { path: 'produtos', component: ProductsComponent },
    { path: 'contato', component: ContactComponent },
    { path: 'sobre', component: AboutComponent },

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
