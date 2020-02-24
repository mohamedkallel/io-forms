import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EditFormModule, InputField, AutocompleteField, FileField } from 'ngx-ioform/public_api';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    EditFormModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  entryComponents: [InputField, AutocompleteField, FileField],
  bootstrap: [AppComponent]
})
export class AppModule { }
