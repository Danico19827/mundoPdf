import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividirIndexComponent } from './dividir-index.component';

describe('DividirIndexComponent', () => {
  let component: DividirIndexComponent;
  let fixture: ComponentFixture<DividirIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividirIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividirIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
