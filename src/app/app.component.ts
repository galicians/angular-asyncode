import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  loading: boolean;
  data: any;
  http: HttpClient;

  constructor( http: HttpClient) {
    this.http = http;
  }

  makeRequest(): void {
    console.log('makeRequest')
    this.loading = true;
    this.http
    // .get('./post.json')
    .get('https://my-json-server.typicode.com/typicode/demo/posts/1')
      .subscribe(data => {
        console.log('data',data)
        this.data = data;
        this.loading = false;
      })

  }

}
