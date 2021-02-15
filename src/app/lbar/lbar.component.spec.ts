import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LbarComponent } from './lbar.component';

describe('LbarComponent', () => {
  let component: LbarComponent;
  let fixture: ComponentFixture<LbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
