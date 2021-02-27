import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FValidationComponent } from './f-validation.component';

describe('FValidationComponent', () => {
  let component: FValidationComponent;
  let fixture: ComponentFixture<FValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
