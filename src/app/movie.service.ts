import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';

  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'ee1467e98fmsh5030f5a85847211p1a64e9jsnb569b1a73364',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  });

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(this.url, { headers: this.headers });
  }
}
