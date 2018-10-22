import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; 
import { catchError, tap } from 'rxjs/operators';

import { IImage } from './images.model'

@Injectable({
  providedIn: 'root'
})
export class PhotographyService {
  private imagesUrl = 'src/api/photography/images.json';
  
  constructor(private http: HttpClient) {}

  getImages(): Observable<IImage[]> {
    return this.http.get<IImage[]>(this.imagesUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  
  private handleError(err: HttpErrorResponse) {
    let errMessage = ''
    if(err.error instanceof ErrorEvent) {
      errMessage = `Annerror occured: ${err.error.message}`;
    } else {
      errMessage = `Server returned code: ${err.status}, error message is ${err.message}`
    }
    console.error(errMessage);
    return throwError(errMessage);
  }
}
