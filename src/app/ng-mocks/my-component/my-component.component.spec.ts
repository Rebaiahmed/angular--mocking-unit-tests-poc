import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MockBuilder, MockInstance, MockRender } from 'ng-mocks';
import { MyComponentComponent, MyService } from './my-component.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MyComponentComponent', () => {
  let component: MyComponentComponent;
  let fixture: ComponentFixture<MyComponentComponent>;
  let myServiceMock: MyService;
  beforeEach(async () => {
   // myServiceMock = MockInstance(MyService, 'getData', () => of({ message: 'Hello world!' }));
    await MockBuilder(MyComponentComponent).mock(MyService, myServiceMock).provide(HttpClientTestingModule);
  });

it('should create', () => {
  const fixture = MockRender(MyComponentComponent);
  expect(fixture.point.componentInstance).toBeTruthy();
});

it('should set message on submit', () => {
  const fixture = MockRender(MyComponentComponent);
  const input = fixture.nativeElement.querySelector('input');
  const button = fixture.nativeElement.querySelector('button');
  input.value = 'test';
  input.dispatchEvent(new Event('input'));
  button.click();
  fixture.detectChanges();
  expect(fixture.nativeElement.querySelector('div').textContent).toContain('Mock response');
});

it('should load data', () => {
  const fixture = MockRender(MyComponentComponent);
  fixture.point.componentInstance.loadData();
  fixture.detectChanges();
  expect(fixture.nativeElement.querySelector('div').textContent).toContain('Mock data');
});

});
