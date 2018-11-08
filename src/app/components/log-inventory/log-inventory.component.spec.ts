import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInventoryComponent } from './log-inventory.component';

describe('LogInventoryComponent', () => {
  let component: LogInventoryComponent;
  let fixture: ComponentFixture<LogInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
