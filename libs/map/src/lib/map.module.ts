import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { MapGlComponent } from './map-gl/map-gl.component';

@NgModule({
  imports: [CommonModule, NgxMapboxGLModule],
  declarations: [MapGlComponent],
  exports: [MapGlComponent]
})
export class MapModule {}
