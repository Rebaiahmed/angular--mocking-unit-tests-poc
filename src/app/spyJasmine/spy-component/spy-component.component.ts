import { Component, OnInit } from '@angular/core';
import { ExampleServiceService } from '../example-service.service';

@Component({
  selector: 'app-spy-component',
  templateUrl: './spy-component.component.html',
  styleUrls: ['./spy-component.component.scss']
})
export class SpyComponentComponent implements OnInit {

  constructor(public service:ExampleServiceService) { }

  increment() {
    this.service.increment();
  }

  decrement() {
    this.service.decrement();
  }

  limitReached() {
    return this.service.minimumOrMaximumReached();
  }


  ngOnInit(): void {
  }


}
