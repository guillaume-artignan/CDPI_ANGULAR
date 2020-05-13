import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientifiquesComponent } from './scientifiques.component';

describe('ScientifiquesComponent', () => {
  let component: ScientifiquesComponent;
  let fixture: ComponentFixture<ScientifiquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScientifiquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientifiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
