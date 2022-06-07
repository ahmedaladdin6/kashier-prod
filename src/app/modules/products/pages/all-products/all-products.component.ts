import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  productName: string = '';
  products: any = [];
  filteredProducts: any = [];
  constructor(private router: Router, private productServices: ProductsService) {}
  
  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts() {
    this.productServices.getAllProducts().subscribe(res => {
      this.products = res
      this.filteredProducts = this.products
    })
  }

  searchProduct() {
    this.filteredProducts = this.products.filter((res: any) =>
      res.name.toLowerCase().match(this.productName.toLowerCase())
    )
  }

  addProduct() {
    this.router.navigateByUrl('/add')
  }

  editProduct(id) {
    this.router.navigateByUrl(`/edit/${id}`)
  }

}
