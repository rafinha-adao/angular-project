import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/shared/models/product.model'

@Component({
  selector: 'app-cards-produtos',
  templateUrl: './cards-produtos.component.html',
  styleUrls: ['./cards-produtos.component.css']
})

export class CardsProdutosComponent implements OnInit {

  product = {} as IProduct;
  products: IProduct[];

  constructor(private productsService: ProductsService) {
    this.products = []
  }

  ngOnInit(): void {
    this.getProducts();
  }

  // defini se um productro será criado ou atualizado
  saveProduct() {
    if (this.product.id !== undefined) {
      this.productsService.updateProduct(this.product).subscribe();
    }
    else {
      this.productsService.saveProduct(this.product).subscribe()
      };
    }

  // Chama o serviço para obtém todos os productros
  getProducts() {
    this.productsService.getProducts().subscribe((product: IProduct[]) => {
      this.products = product
    })
  }

  // deleta um productro
  deleteProduct(product: IProduct) {
    this.productsService.deleteProduct(product).subscribe();
  }

  // copia o productro para ser editado.
  editProduct(product: IProduct) {
    product = { ...product };
  }
}
