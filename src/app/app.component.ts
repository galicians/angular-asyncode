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
  data: object;
  http: HttpClient;

  constructor( http: HttpClient) {
    this.http = http;
  }

  makeRequest(): void {
    this.loading = true;
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      })

  }

}
