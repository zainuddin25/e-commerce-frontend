import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageNotAdminComponent } from './message-not-admin.component';

describe('MessageNotAdminComponent', () => {
  let component: MessageNotAdminComponent;
  let fixture: ComponentFixture<MessageNotAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageNotAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageNotAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
