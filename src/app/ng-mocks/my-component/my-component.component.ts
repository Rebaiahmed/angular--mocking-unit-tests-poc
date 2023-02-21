import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';

@Injectable()
export class MyService {
  getData() {
    return of('Mock data');
  }
}


@Component({
  selector: 'app-my-component',
  template: `
  <form [formGroup]="form">
    <input type="text" formControlName="name">
  </form>
  <div>{{ message }}</div>
`
})
export class MyComponentComponent implements OnInit {

  form: FormGroup=this.fb.group({
    name: ['', Validators.required]
  });
  message=''

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private myService: MyService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    const name = this.form.get('name').value;
    this.http.get(`/api/${name}`).subscribe(
      (data: any) => {
        this.message = data.message;
      },
      (error: any) => {
        this.message = error.message;
      }
    );
  }

  loadData() {
    this.myService.getData().subscribe((data: any) => {
      this.message = data;
    });
  }

}
