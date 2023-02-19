import { Component, OnInit } from '@angular/core';
import { ApiCallService, MyData } from 'src/app/api-call.service';


@Component({
  selector: 'app-test-test-mockery',
  template: `
  <h1>My Component</h1>
  <ul>
    <li *ngFor="let item of data">{{item.title}}</li>
  </ul>
`
})
export class TestTestMockeryComponent implements OnInit {

  data: MyData[]=[];

  constructor(private myService: ApiCallService) {}

  ngOnInit() {
    this.myService.getData().subscribe(data => {
      this.data = data;
    });
  }

}
