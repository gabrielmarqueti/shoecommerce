import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcicsComponent } from './acics.component';

describe('AcicsComponent', () => {
  let component: AcicsComponent;
  let fixture: ComponentFixture<AcicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
