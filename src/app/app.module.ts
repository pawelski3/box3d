import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Text3dComponent } from './text3d/text3d.component';
import { Text2Component } from './text2/text2.component';

@NgModule({
  declarations: [
    AppComponent,
    Text3dComponent,
    Text2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
