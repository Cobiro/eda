import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdaComponent } from './eda.component';

describe('EdaComponent', () => {
  let component: EdaComponent;
  let fixture: ComponentFixture<EdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
