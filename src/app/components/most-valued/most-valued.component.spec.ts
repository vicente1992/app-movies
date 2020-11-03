import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostValuedComponent } from './most-valued.component';

describe('MostValuedComponent', () => {
  let component: MostValuedComponent;
  let fixture: ComponentFixture<MostValuedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostValuedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostValuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
