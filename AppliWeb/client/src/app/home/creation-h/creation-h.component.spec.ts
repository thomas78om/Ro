import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationHComponent } from './creation-h.component';

describe('CreationHComponent', () => {
  let component: CreationHComponent;
  let fixture: ComponentFixture<CreationHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
