import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http: HttpClient) { }

  getInformation(): Observable<any[]> {
    return new Observable(observer => {
      this.http.get(`https://corona.lmao.ninja/all`).subscribe(
        (games: any[]) => {
          observer.next(games);
        },
        error => {
          observer.error('Could not get games');
        }
      );
    });
  }
}
