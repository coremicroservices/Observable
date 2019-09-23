import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Receiver2Component } from './receiver2.component';

describe('Receiver2Component', () => {
  let component: Receiver2Component;
  let fixture: ComponentFixture<Receiver2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Receiver2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Receiver2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
