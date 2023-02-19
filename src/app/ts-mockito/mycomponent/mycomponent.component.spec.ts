import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomponentComponent } from './mycomponent.component';
import { anything, instance, mock, when } from 'ts-mockito';
import { ApiCallService } from 'src/app/api-call.service';
import { of } from 'rxjs';
fdescribe('MycomponentComponent', () => {
  let component: MycomponentComponent;
  let fixture: ComponentFixture<MycomponentComponent>;
  let myServiceMock: ApiCallService;
  beforeEach(async () => {

    myServiceMock = mock(ApiCallService);
    when(myServiceMock.getMessage()).thenReturn(of('Hello, World!'));

    await TestBed.configureTestingModule({
      declarations: [ MycomponentComponent ],
      providers: [{ provide: ApiCallService, useValue: instance(myServiceMock) }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should display the message from MyService', async () => {
    await fixture.whenStable();
    expect(component.message).toEqual('Hello, World!');
  });
});
