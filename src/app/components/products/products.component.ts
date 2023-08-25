import { Component, OnInit } from '@angular/core';
import { ProductsConstants } from './products.constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsConstants],
})
export class ProductsComponent implements OnInit {
  tabs: any[] = [];
  products: any[] = [];

  constructor(private productsConstants: ProductsConstants) {
    this.tabs = this.productsConstants.tabs;
    this.products = this.productsConstants.products;
  }

  ngOnInit(): void {}

  changeActive(tab: any) {
    this.tabs.forEach((t) => (t.active = false));
    var obj = this.tabs.find((t) => t.id == tab.id);
    obj.active = true;
  }
}
