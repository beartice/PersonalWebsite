import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RaccoonLeftComponent } from './raccoon-left/raccoon-left.component';
import { RaccoonLogoComponent } from './raccoon-logo/raccoon-logo.component';
import { RaccoonRightComponent } from './raccoon-right/raccoon-right.component';

@NgModule({
  declarations: [
    AppComponent,
    RaccoonLeftComponent,
    RaccoonLogoComponent,
    RaccoonRightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
