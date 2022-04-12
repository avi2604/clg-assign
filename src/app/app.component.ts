import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'clg-assign';
  vedios: any = [];

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:4200/assets/data.json')
      .subscribe(data => {
        this.vedios = data;
      });
  }

  watchVedio(vedio) {
    window.open(vedio.url, "_blank");
  }
}
