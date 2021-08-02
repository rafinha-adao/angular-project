import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import { CardsProdutosComponent } from './components/cards/cards-produtos.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

import { Routing } from './app-routing';
import { FooterComponent } from './components/footer/footer.component';
import { Error404Component } from './pages/error404/error404.component';

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
    Error404Component
  ],
  imports: [
    NgbModule,
    Routing,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
