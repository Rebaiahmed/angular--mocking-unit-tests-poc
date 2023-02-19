import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpyComponentComponent } from './spyJasmine/spy-component/spy-component.component';
import { LoginComponent } from './spyJasmine/login/login.component';
import { TestTestMockeryComponent } from './ts-mockery/test-test-mockery/test-test-mockery.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SpyComponentComponent,
    LoginComponent,
    TestTestMockeryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
