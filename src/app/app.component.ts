import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { CoronaService } from './corona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'corona state';
  allInformation: any;

  constructor(public http: HttpClient, public coronaService: CoronaService, public sanitizer: DomSanitizer) {
    this.getInformation();
  }

  getInformation() {
    this.coronaService.getInformation().subscribe(allInformation => {
      if (allInformation) {
        this.allInformation = allInformation;
        console.log(allInformation);
      }
    });
  }
}
