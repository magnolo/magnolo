import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UiModule}  from '@twentythree/ui';
import { MapModule}  from '@twentythree/map';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), MapModule, UiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

