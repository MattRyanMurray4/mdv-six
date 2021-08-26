import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredatorsListComponent } from './predators-list.component';

describe('PredatorsListComponent', () => {
  let component: PredatorsListComponent;
  let fixture: ComponentFixture<PredatorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredatorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredatorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
