import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountElemComponent } from './count-elem.component';

describe('CountElemComponent', () => {
  let component: CountElemComponent;
  let fixture: ComponentFixture<CountElemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountElemComponent]
    });
    fixture = TestBed.createComponent(CountElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
