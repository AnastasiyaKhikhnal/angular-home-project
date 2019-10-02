import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryInformationPageComponent } from './delivery-information-page.component';

describe('DeliveryInformationPageComponent', () => {
  let component: DeliveryInformationPageComponent;
  let fixture: ComponentFixture<DeliveryInformationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryInformationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
