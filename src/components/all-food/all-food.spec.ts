import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFood } from './all-food';

describe('AllFood', () => {
  let component: AllFood;
  let fixture: ComponentFixture<AllFood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllFood]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFood);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
