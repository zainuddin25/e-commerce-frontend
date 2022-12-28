import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabelComponent } from './product-tabel.component';

describe('ProductTabelComponent', () => {
  let component: ProductTabelComponent;
  let fixture: ComponentFixture<ProductTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
