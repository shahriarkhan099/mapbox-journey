import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mapbox1Component } from './mapbox1.component';

describe('Mapbox1Component', () => {
  let component: Mapbox1Component;
  let fixture: ComponentFixture<Mapbox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mapbox1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mapbox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
