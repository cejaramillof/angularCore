import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "@angular-core-workshop/material";
import {AppRoutingModule} from "./app-routing.module";
import {UiLoginModule} from "@angular-core-workshop/ui-login";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot([], {initialNavigation: 'enabled'}),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    UiLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
