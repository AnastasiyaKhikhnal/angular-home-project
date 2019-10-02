import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoriesForDogComponent } from './product-categories-for-dog.component';

describe('ProductCategoriesForDogComponent', () => {
  let component: ProductCategoriesForDogComponent;
  let fixture: ComponentFixture<ProductCategoriesForDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoriesForDogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoriesForDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
