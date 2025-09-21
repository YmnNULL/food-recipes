import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificFood } from './specific-food';

describe('SpecificFood', () => {
  let component: SpecificFood;
  let fixture: ComponentFixture<SpecificFood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificFood]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificFood);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
