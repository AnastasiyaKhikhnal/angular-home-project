import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageContentComponent } from './page-content/page-content.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { OrderInformatioPageComponent } from './pages/order-informatio-page/order-informatio-page.component';
import { PaymentInformationPageComponent } from './pages/payment-information-page/payment-information-page.component';
import { DeliveryInformationPageComponent } from './pages/delivery-information-page/delivery-information-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PageContentComponent,
    MainPageComponent,
    OrderInformatioPageComponent,
    PaymentInformationPageComponent,
    DeliveryInformationPageComponent,
    ContactsPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
