import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DatailPageComponent } from './datail-page/datail-page.component';
import {FooterComponent} from "./shared/components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DatailPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
