import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAbandonComponent } from './confirm-abandon.component';

describe('ConfirmAbandonComponent', () => {
  let component: ConfirmAbandonComponent;
  let fixture: ComponentFixture<ConfirmAbandonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmAbandonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAbandonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
