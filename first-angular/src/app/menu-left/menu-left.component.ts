import { products } from './../model/product';
import { Component, OnInit, Renderer } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent implements OnInit {
  products = products;
  currentProduct = {};
  constructor(private render: Renderer) {}

  ngOnInit() {
    this.currentProduct = products[0];
  }

  changeProduct(product: {}) {
    this.currentProduct = product;
  }
}
