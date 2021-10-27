import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { IProduct } from '../../shared/models/product.model'

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  apiUrl = 'http://localhost:3001/foods'

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os produtos
  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.apiUrl)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um produto pelo id
  getProductById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(this.apiUrl + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um produto
  saveProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(this.apiUrl, JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // atualiza um produto
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(this.apiUrl + '/' + product.id, JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um produto
  deleteProduct(product: IProduct) {
    return this.httpClient.delete<IProduct>(this.apiUrl + '/' + product.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
