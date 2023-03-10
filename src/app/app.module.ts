import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpyComponentComponent } from './spyJasmine/spy-component/spy-component.component';
import { LoginComponent } from './spyJasmine/login/login.component';
import { TestTestMockeryComponent } from './ts-mockery/test-test-mockery/test-test-mockery.component';
import { HttpClientModule } from '@angular/common/http';
import { MycomponentComponent } from './ts-mockito/mycomponent/mycomponent.component';
import { MyComponentComponent } from './ng-mocks/my-component/my-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SpyComponentComponent,
    LoginComponent,
    TestTestMockeryComponent,
    MycomponentComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
