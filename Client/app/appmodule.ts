import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstComponent }  from './first.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    FirstComponent
/* . . . */
  ],
  bootstrap: [ FirstComponent ]
})
export class AppModule { }