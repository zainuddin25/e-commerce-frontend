import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSallerComponent } from './sidebar-saller.component';

describe('SidebarSallerComponent', () => {
  let component: SidebarSallerComponent;
  let fixture: ComponentFixture<SidebarSallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSallerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
