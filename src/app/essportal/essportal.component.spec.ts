import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssportalComponent } from './essportal.component';

describe('EssportalComponent', () => {
  let component: EssportalComponent;
  let fixture: ComponentFixture<EssportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
