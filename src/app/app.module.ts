import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageContentComponent } from './page-content/page-content.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { OrderInformationPageComponent } from './pages/order-information-page/order-information-page.component';
import { PaymentInformationPageComponent } from './pages/payment-information-page/payment-information-page.component';
import { DeliveryInformationPageComponent } from './pages/delivery-information-page/delivery-information-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ProductCategoriesForDogComponent } from './product-categories/product-categories-for-dog/product-categories-for-dog.component';
import { ProductCategoriesForCatComponent } from './product-categories/product-categories-for-cat/product-categories-for-cat.component';

const appRoutes = [
  { path: '', component: MainPageComponent},
  { path: 'order', component: OrderInformationPageComponent},
  { path: 'delivery', component: DeliveryInformationPageComponent},
  { path: 'payment', component: PaymentInformationPageComponent},
  { path: 'contacts', component: ContactsPageComponent},
  { path: 'dog-products', component: ProductCategoriesForDogComponent},
  { path: 'cat-products', component: ProductCategoriesForCatComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PageContentComponent,
    MainPageComponent,
    OrderInformationPageComponent,
    PaymentInformationPageComponent,
    DeliveryInformationPageComponent,
    ContactsPageComponent,
    ProductCategoriesForDogComponent,
    ProductCategoriesForCatComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
