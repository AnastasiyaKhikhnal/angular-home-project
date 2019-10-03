import {Component, OnInit, Output} from '@angular/core';

export interface Products {
  url: string
  name: string
  cost: number
}

@Component({
  selector: 'app-product-categories-for-cat',
  templateUrl: './product-categories-for-cat.component.html',
  styleUrls: ['./product-categories-for-cat.component.css']
})
export class ProductCategoriesForCatComponent implements OnInit {

  public products: Products[] = [
    { url: "https://exkorm.ru/image/cache/catalog/import_files/4f/4fee16298a8611e984aabac520b07470_4fee162a8a8611e984aabac520b07470-1200x800.png",
      name: 'Ontario',
      cost: 1000},
    { url: "https://exkorm.ru/image/cache/catalog/import_files/4f/4fee16298a8611e984aabac520b07470_4fee162a8a8611e984aabac520b07470-1200x800.png",
      name: 'Royal Canin',
      cost: 2000},
    { url: "https://exkorm.ru/image/cache/catalog/import_files/4f/4fee16298a8611e984aabac520b07470_4fee162a8a8611e984aabac520b07470-1200x800.png",
      name: 'Pro Plan',
      cost: 500},
    { url: "https://exkorm.ru/image/cache/catalog/import_files/4f/4fee16298a8611e984aabac520b07470_4fee162a8a8611e984aabac520b07470-1200x800.png",
      name: 'Nutra Mix',
      cost: 14000},
    { url: "https://exkorm.ru/image/cache/catalog/import_files/4f/4fee16298a8611e984aabac520b07470_4fee162a8a8611e984aabac520b07470-1200x800.png",
      name: 'Banters',
      cost: 3000},
    { url: "https://exkorm.ru/image/cache/catalog/import_files/4f/4fee16298a8611e984aabac520b07470_4fee162a8a8611e984aabac520b07470-1200x800.png",
      name: 'Ontario',
      cost: 1000},
    { url: "https://exkorm.ru/image/cache/catalog/import_files/4f/4fee16298a8611e984aabac520b07470_4fee162a8a8611e984aabac520b07470-1200x800.png",
      name: 'Royal Canin',
      cost: 2000},
    { url: "https://exkorm.ru/image/cache/catalog/import_files/4f/4fee16298a8611e984aabac520b07470_4fee162a8a8611e984aabac520b07470-1200x800.png",
      name: 'Pro Plan',
      cost: 500},
    { url: "https://exkorm.ru/image/cache/catalog/import_files/4f/4fee16298a8611e984aabac520b07470_4fee162a8a8611e984aabac520b07470-1200x800.png",
      name: 'Nutra Mix',
      cost: 14000},
    { url: "https://exkorm.ru/image/cache/catalog/import_files/4f/4fee16298a8611e984aabac520b07470_4fee162a8a8611e984aabac520b07470-1200x800.png",
      name: 'Banters',
      cost: 3000},
    { url: "https://exkorm.ru/image/cache/catalog/import_files/4f/4fee16298a8611e984aabac520b07470_4fee162a8a8611e984aabac520b07470-1200x800.png",
      name: 'Ontario',
      cost: 1000},
    { url: "https://exkorm.ru/image/cache/catalog/import_files/4f/4fee16298a8611e984aabac520b07470_4fee162a8a8611e984aabac520b07470-1200x800.png",
      name: 'Royal Canin',
      cost: 2000},
    { url: "https://exkorm.ru/image/cache/catalog/import_files/4f/4fee16298a8611e984aabac520b07470_4fee162a8a8611e984aabac520b07470-1200x800.png",
      name: 'Pro Plan',
      cost: 500},
    { url: "https://exkorm.ru/image/cache/catalog/import_files/4f/4fee16298a8611e984aabac520b07470_4fee162a8a8611e984aabac520b07470-1200x800.png",
      name: 'Nutra Mix',
      cost: 14000},
    { url: "https://exkorm.ru/image/cache/catalog/import_files/4f/4fee16298a8611e984aabac520b07470_4fee162a8a8611e984aabac520b07470-1200x800.png",
      name: 'Banters',
      cost: 3000},
  ];

  constructor() { }

  ngOnInit() {
  }

}
