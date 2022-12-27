import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetRoleOptionComponent } from './bottom-sheet-role-option.component';

describe('BottomSheetRoleOptionComponent', () => {
  let component: BottomSheetRoleOptionComponent;
  let fixture: ComponentFixture<BottomSheetRoleOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetRoleOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetRoleOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
