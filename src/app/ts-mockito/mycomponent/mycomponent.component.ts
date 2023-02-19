import { Component, OnInit } from '@angular/core';
import { ApiCallService, MyData } from 'src/app/api-call.service';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
})
export class MycomponentComponent implements OnInit {

  data: MyData[]=[];
  message: string=''
  constructor(private myService: ApiCallService) {}

  ngOnInit() {
    this.myService.getMessage().subscribe((message) => (this.message = message));
  }

}
