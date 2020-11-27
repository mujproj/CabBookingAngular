import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverAddComponent } from './driver-add.component';

describe('DriverAddComponent', () => {
  let component: DriverAddComponent;
  let fixture: ComponentFixture<DriverAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
