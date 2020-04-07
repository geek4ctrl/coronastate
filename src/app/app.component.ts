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
  allCountries: any;

  constructor(public http: HttpClient, public coronaService: CoronaService, public sanitizer: DomSanitizer) {
    this.getInformation();
    this.getCountries();
  }

  getInformation() {
    this.coronaService.getInformation().subscribe(allInformation => {
      if (allInformation) {
        this.allInformation = allInformation;
        console.log('All information: ', allInformation);
      }
    });
  }

  getCountries() {
    this.coronaService.getCountries().subscribe(allCountries => {
      if (allCountries) {
        this.allCountries = allCountries;
        console.log('All countries: ', allCountries);
        allCountries.sort((a, b) => (a.cases < b.cases ? 1 : -1));
      }
    });
  }
}
