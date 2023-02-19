import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiCallService, MyData } from '../api-call.service';
import { Mock } from 'ts-mockery';
import { TestTestMockeryComponent } from './test-test-mockery.component';
import { of } from 'rxjs';

describe('TestTestMockeryComponent', () => {
  let component: TestTestMockeryComponent;
  let fixture: ComponentFixture<TestTestMockeryComponent>;
  let myServiceMock: ApiCallService;
  beforeEach(waitForAsync(() => {
    const myDataArrayMock = Mock.of<Array<MyData>>([
      { id: 1, title: 'John Doe' },
      { id: 2, title: 'Jane Doe' },
    ]);
    myServiceMock = Mock.of<ApiCallService>({
      getData: () => of(myDataArrayMock)
    });

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TestTestMockeryComponent],
      providers: [
        { provide: ApiCallService, useValue: myServiceMock }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTestMockeryComponent);
    component = fixture.componentInstance;
  });

  it('should render the data correctly', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const items = compiled.querySelectorAll('li');
    expect(items.length).toBe(2);
    expect(items[0].textContent).toContain('John Doe');
    expect(items[1].textContent).toContain('Jane Doe');
  });
});
