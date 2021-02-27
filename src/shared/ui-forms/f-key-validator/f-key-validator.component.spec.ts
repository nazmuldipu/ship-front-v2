import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FKeyValidatorComponent } from './f-key-validator.component';

describe('FKeyValidatorComponent', () => {
  let component: FKeyValidatorComponent;
  let fixture: ComponentFixture<FKeyValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FKeyValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FKeyValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
