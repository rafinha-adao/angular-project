import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {

   }

   getProducts() {
    let products

    return products = [
      {
        "id": 1,
        "nome": "Hot Dog",
        "valor": 10,
        "quantidade": 5,
      },
      {
        "id": 2,
        "nome": "Suco de Laranja",
        "valor": 4,
        "quantidade": 8,
      },
      {
        "id": 3,
        "nome": "Chocolate",
        "valor": 3,
        "quantidade": 2,
      },
      {
        "id": 4,
        "nome": "Hamburguer",
        "valor": 12,
        "quantidade": 5,
      },
      {
        "id": 5,
        "nome": "Refrigerante",
        "valor": 5,
        "quantidade": 7,
      }
    ]
  }
}
