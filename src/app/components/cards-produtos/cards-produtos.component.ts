import { Component, OnInit } from '@angular/core';

import { ProductsService } from './products-service.service';

@Component({
  selector: 'app-cards-produtos',
  templateUrl: './cards-produtos.component.html',
  styleUrls: ['./cards-produtos.component.css']
})
export class CardsProdutosComponent implements OnInit {

  constructor(ProductsService: ProductsService) {

      let product = ProductsService.getProducts



   }

  ngOnInit(): void {
  }

}
