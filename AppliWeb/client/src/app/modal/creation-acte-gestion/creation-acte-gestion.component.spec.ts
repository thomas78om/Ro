import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationActeGestionComponent } from './creation-acte-gestion.component';

describe('CreationActeGestionComponent', () => {
  let component: CreationActeGestionComponent;
  let fixture: ComponentFixture<CreationActeGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationActeGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationActeGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
