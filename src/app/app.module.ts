import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
