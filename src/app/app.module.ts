import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { Routing } from './app-routing';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MenuComponent } from './components/menu/menu.component';
import { CardsProdutosComponent } from './components/cards/cards-produtos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { AddProductComponent } from './pages/add-product/add-product.component'
import { DeleteProductComponent } from './pages/delete-product/delete-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { Error404Component } from './pages/error404/error404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ANGULAR MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuComponent,
    CardsProdutosComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    Error404Component,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    ProductFormComponent
  ],
  imports: [
    NgbModule,
    Routing,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
