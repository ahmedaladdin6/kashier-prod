import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url = environment.api_url;

@Injectable({
  providedIn: 'root'
})


export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(`${url}/products`)
  }

  getProduct(id) {
    return this.http.get(`${url}/products/${id}`)
  }

  addProduct(payload) {
    return this.http.post(`${url}/products`, payload)
  }

  editProduct(id, payload) {
    return this.http.put(`${url}/products/${id}`, payload)
  }

  deleteProduct(id) {
    return this.http.delete(`${url}/products/${id}`)
  }
}
