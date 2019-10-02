import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInformatioPageComponent } from './order-informatio-page.component';

describe('OrderInformatioPageComponent', () => {
  let component: OrderInformatioPageComponent;
  let fixture: ComponentFixture<OrderInformatioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderInformatioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInformatioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
