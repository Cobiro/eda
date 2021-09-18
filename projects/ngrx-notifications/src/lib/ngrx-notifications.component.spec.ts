import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxNotificationsComponent } from './ngrx-notifications.component';

describe('NgrxNotificationsComponent', () => {
  let component: NgrxNotificationsComponent;
  let fixture: ComponentFixture<NgrxNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
