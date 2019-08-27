import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationHComponent } from './consultation-h.component';

describe('ConsultationHComponent', () => {
  let component: ConsultationHComponent;
  let fixture: ComponentFixture<ConsultationHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
