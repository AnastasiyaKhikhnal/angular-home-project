import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoriesForCatComponent } from './product-categories-for-cat.component';

describe('ProductCategoriesForCatComponent', () => {
  let component: ProductCategoriesForCatComponent;
  let fixture: ComponentFixture<ProductCategoriesForCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoriesForCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoriesForCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
