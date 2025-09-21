import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialDish } from './special-dish';

describe('SpecialDish', () => {
  let component: SpecialDish;
  let fixture: ComponentFixture<SpecialDish>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialDish]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialDish);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
