import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpyComponentComponent } from './spyJasmine/spy-component/spy-component.component';
import { LoginComponent } from './spyJasmine/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SpyComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
