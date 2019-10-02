import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInformationPageComponent } from './payment-information-page.component';

describe('PaymentInformationPageComponent', () => {
  let component: PaymentInformationPageComponent;
  let fixture: ComponentFixture<PaymentInformationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentInformationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
