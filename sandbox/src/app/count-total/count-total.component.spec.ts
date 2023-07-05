import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountTotalComponent } from './count-total.component';

describe('CountTotalComponent', () => {
  let component: CountTotalComponent;
  let fixture: ComponentFixture<CountTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountTotalComponent]
    });
    fixture = TestBed.createComponent(CountTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
