import {Component, Input, OnInit} from '@angular/core';
import {Products} from '../product-categories/product-categories-for-cat/product-categories-for-cat.component';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() products: Products[] = [];


  constructor() { }

  ngOnInit() {
  }

}
