import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Receiver3Component } from './receiver3.component';

describe('Receiver3Component', () => {
  let component: Receiver3Component;
  let fixture: ComponentFixture<Receiver3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Receiver3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Receiver3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
