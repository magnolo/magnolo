import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGlComponent } from './map-gl.component';

describe('MapGlComponent', () => {
  let component: MapGlComponent;
  let fixture: ComponentFixture<MapGlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapGlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapGlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
