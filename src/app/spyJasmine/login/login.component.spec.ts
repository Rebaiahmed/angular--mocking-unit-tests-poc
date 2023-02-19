import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthService } from '../auth.service';

import { LoginComponent } from './login.component';


class MockAuthService {
  authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }
}

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let mockService: MockAuthService;
  let service: AuthService;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement;
  let spy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
    mockService = new MockAuthService();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
   fixture.detectChanges();
  });

  fit('needsLogin returns true when the user has not been authenticated (spy version)', () => {
    spy = spyOn(service, 'isAuthenticated').and.callThrough();
    debugElement
    .query(By.css('a'))
    .triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.needsLogin()).toBeTruthy();
    expect(spy).toHaveBeenCalled();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('needsLogin returns true when the user has not been authenticated', () => {
    mockService.authenticated = false;
    expect(component.needsLogin()).toBeTruthy();
  });

  xit('needsLogin returns true when the user has not been authenticated (jasmine.createSpyObject)', () => {
    const jasmineSpy = jasmine.createSpyObj('AuthService', ['isAuthenticated']);;
     expect(component.needsLogin()).toBeTruthy();
     expect(jasmineSpy.isAuthenticated).toHaveBeenCalledTimes(1);
   });

  xit('needsLogin returns false when the user has been authenticated', () => {
    mockService.authenticated = true;
    expect(component.needsLogin()).toBeFalsy();
  });
});
