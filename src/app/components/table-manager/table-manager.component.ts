import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { ProductsService } from 'src/app/services/products.service'
import { IProduct } from 'src/shared/models/product.model'

@Component({
  selector: 'app-table-manager',
  templateUrl: './table-manager.component.html',
  styleUrls: ['./table-manager.component.css']
})
export class TableManagerComponent implements OnInit {

  displayedColumns: string[] = ['Posição', 'Nome', 'Preço', 'Quantidade'];

  product = {} as IProduct;
  products: IProduct[];

  constructor(private productsService: ProductsService) {
    this.products = []
  }

  ngOnInit(): void {
    this.getProducts();
  }

  // defini se um produto será criado ou atualizado
  saveProduct() {
    if (this.product.id !== undefined) {
      this.productsService.updateProduct(this.product).subscribe();
    }
    else {
      this.productsService.saveProduct(this.product).subscribe()
      };
    }

  // Chama o serviço para obtém todos os produtos
  getProducts() {
    this.productsService.getProducts().subscribe((product: IProduct[]) => {
      this.products = product
    })
  }

  // deleta um produto
  deleteProduct(product: IProduct) {
    this.productsService.deleteProduct(product).subscribe();
  }

  // copia o produto para ser editado.
  editProduct(product: IProduct) {
    product = { ...product };
  }
}
