import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCategoriesComponent } from './ngrx-categories.component';

describe('NgrxCategoriesComponent', () => {
  let component: NgrxCategoriesComponent;
  let fixture: ComponentFixture<NgrxCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
