import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8086/learn/api/products')
  }

  findOne(id: number): Observable<Product>{
    return this.http.get<Product>(`http://localhost:8086/learn/api/products/${id}`)
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`http://localhost:8086/learn/api/products/${id}`)
  }

  add(prod: Product): Observable<Product> {
    return this.http.post<Product>(`http://localhost:8086/learn/api/products`, prod)

  }
}
