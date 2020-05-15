import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairesComponent } from './formulaires.component';

describe('FormulairesComponent', () => {
  let component: FormulairesComponent;
  let fixture: ComponentFixture<FormulairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
