import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RaccoonLeftComponent } from './raccoon-left/raccoon-left.component';
import { RaccoonLogoComponent } from './raccoon-logo/raccoon-logo.component';
import { RaccoonRightComponent } from './raccoon-right/raccoon-right.component';
import { CvButtonComponent } from './cv-button/cv-button.component';
import { InstagramButtonComponent } from './instagram-button/instagram-button.component';
import { GithubButtonComponent } from './github-button/github-button.component';

@NgModule({
  declarations: [
    AppComponent,
    RaccoonLeftComponent,
    RaccoonLogoComponent,
    RaccoonRightComponent,
    CvButtonComponent,
    InstagramButtonComponent,
    GithubButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
