import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusermodalComponent } from './addusermodal.component';

describe('AddusermodalComponent', () => {
  let component: AddusermodalComponent;
  let fixture: ComponentFixture<AddusermodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddusermodalComponent]
    });
    fixture = TestBed.createComponent(AddusermodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
