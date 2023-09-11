import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinarIndexComponent } from './combinar-index.component';

describe('CombinarIndexComponent', () => {
  let component: CombinarIndexComponent;
  let fixture: ComponentFixture<CombinarIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinarIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinarIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
