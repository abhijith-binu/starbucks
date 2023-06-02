import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeatHomeComponent } from './coffeeat-home.component';

describe('CoffeeatHomeComponent', () => {
  let component: CoffeeatHomeComponent;
  let fixture: ComponentFixture<CoffeeatHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeatHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeatHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
