import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadytoeatComponent } from './readytoeat.component';

describe('ReadytoeatComponent', () => {
  let component: ReadytoeatComponent;
  let fixture: ComponentFixture<ReadytoeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadytoeatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadytoeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
