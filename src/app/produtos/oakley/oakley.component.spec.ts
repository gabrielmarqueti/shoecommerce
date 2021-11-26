import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OakleyComponent } from './oakley.component';

describe('OakleyComponent', () => {
  let component: OakleyComponent;
  let fixture: ComponentFixture<OakleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OakleyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OakleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
