import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTabelComponent } from './users-tabel.component';

describe('UsersTabelComponent', () => {
  let component: UsersTabelComponent;
  let fixture: ComponentFixture<UsersTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersTabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
