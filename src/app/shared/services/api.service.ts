import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  isLoading = new BehaviorSubject<boolean>(false);

  API_URL = environment.API_URL;
  API_KEY = `api_key=c9a52b6ee679b14d7acbdd1aec87cdeb`;
  API_MOVIE = `${this.API_URL}`;
  urlImage = `https://image.tmdb.org/t/p/`;

  // Setting request headers to JSON
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')
    .set('Accept', 'application/json');

  constructor(private httpClient: HttpClient, private router: Router) {}

  getDataApi(param: string): Observable<any> {
    return this.httpClient
      .get<any>(this.API_MOVIE + param, {
        headers: this.headers,
        responseType: 'json',
      })
      .pipe(catchError(this.errorGetHandler.bind(this)));
  }

  errorGetHandler(error: HttpErrorResponse) {
    this.router.navigate(['/server-error']);
    return throwError(error.message || 'Server Error');
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}
