import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APBTSComponent } from './apbts/apbts.component';
import { PerrosComponent } from './perros/perros.component';

@NgModule({
  declarations: [
    AppComponent,
    APBTSComponent,
    PerrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
