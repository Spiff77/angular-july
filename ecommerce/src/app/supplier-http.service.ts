import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './model/product.model';
import {Supplier} from './model/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierHttpService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>('http://localhost:8086/learn/api/suppliers')
  }

  findOne(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(`http://localhost:8086/learn/api/suppliers/${id}`)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8086/learn/api/suppliers/${id}`)
  }

  add(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(`http://localhost:8086/learn/api/suppliers`, supplier)
  }
}
