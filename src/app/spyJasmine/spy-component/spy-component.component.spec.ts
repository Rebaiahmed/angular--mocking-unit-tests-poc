import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ExampleServiceService } from '../example-service.service';

import { SpyComponentComponent } from './spy-component.component';

describe('SpyComponentComponent', () => {
  let component: SpyComponentComponent;
  let fixture: ComponentFixture<SpyComponentComponent>;
  let debugElement: DebugElement;
  let incrementDecrementService:ExampleServiceService;
  let incrementSpy:any;
  let exampleServiceSpy:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpyComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpyComponentComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    incrementDecrementService = debugElement.injector.get(ExampleServiceService);


    incrementSpy=  spyOn(incrementDecrementService, 'increment').and.callThrough();
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment in template', () => {
    debugElement
      .query(By.css('button.increment'))
      .triggerEventHandler('click', null);

    fixture.detectChanges();

    const value = debugElement.query(By.css('h1')).nativeElement.innerText;

    expect(value).toEqual('1');
  });

  fit(`should show 'Limit reached' message`, () => {
    exampleServiceSpy= spyOn(incrementDecrementService,'minimumOrMaximumReached').and.returnValue(false);
    fixture.detectChanges();

    const message = debugElement.query(By.css('p.message')).nativeElement.innerText;

    expect(message).toEqual('Limit reached!');
  });

  it('should stop at 15 and show maximum message', () => {
    incrementDecrementService.value = 15;
    debugElement
      .query(By.css('button.increment'))
      .triggerEventHandler('click', null);

    fixture.detectChanges();

    const value = debugElement.query(By.css('h1')).nativeElement.innerText;
    const message = debugElement.query(By.css('p.message')).nativeElement.innerText;

    expect(value).toEqual('15');
    expect(message).toContain('Maximum');
  });


  it('should call increment on the service', () => {
  incrementSpy=  spyOn(incrementDecrementService, 'increment').and.callThrough();
    debugElement
      .query(By.css('button.increment'))
      .triggerEventHandler('click', null);
    expect(incrementDecrementService.value).toBe(1);
    expect(incrementSpy).toHaveBeenCalledTimes(1);
  });




  it(`should show 'Limit reached' message`, () => {
    fixture.detectChanges();
    const message = debugElement.query(By.css('p.message2')).nativeElement.innerText;
    expect(message).toEqual('Limit reached!');
  });




});
