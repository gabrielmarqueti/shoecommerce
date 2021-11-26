import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderArmourComponent } from './under-armour.component';

describe('UnderArmourComponent', () => {
  let component: UnderArmourComponent;
  let fixture: ComponentFixture<UnderArmourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderArmourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderArmourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
