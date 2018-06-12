import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsviewerComponent } from './logsviewer.component';

describe('LogsviewerComponent', () => {
  let component: LogsviewerComponent;
  let fixture: ComponentFixture<LogsviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
