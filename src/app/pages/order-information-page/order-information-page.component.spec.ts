import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInformationPageComponent } from './order-information-page.component';

describe('OrderInformationPageComponent', () => {
  let component: OrderInformationPageComponent;
  let fixture: ComponentFixture<OrderInformationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderInformationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
