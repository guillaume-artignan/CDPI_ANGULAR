import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteurTestComponent } from './compteur-test.component';

describe('CompteurTestComponent', () => {
  let component: CompteurTestComponent;
  let fixture: ComponentFixture<CompteurTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteurTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteurTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
