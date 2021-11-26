import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympikusComponent } from './olympikus.component';

describe('OlympikusComponent', () => {
  let component: OlympikusComponent;
  let fixture: ComponentFixture<OlympikusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlympikusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlympikusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
