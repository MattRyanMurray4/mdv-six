import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredatorDetailsComponent } from './predator-details.component';

describe('PredatorDetailsComponent', () => {
  let component: PredatorDetailsComponent;
  let fixture: ComponentFixture<PredatorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredatorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
