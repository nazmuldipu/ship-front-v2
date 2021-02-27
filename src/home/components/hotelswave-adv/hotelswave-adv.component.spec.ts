import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelswaveAdvComponent } from './hotelswave-adv.component';

describe('HotelswaveAdvComponent', () => {
  let component: HotelswaveAdvComponent;
  let fixture: ComponentFixture<HotelswaveAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelswaveAdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelswaveAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
