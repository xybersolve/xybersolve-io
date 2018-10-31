import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; 
import { catchError, tap, map } from 'rxjs/operators';

import { IImage } from './images.model'


@Injectable({
  providedIn: 'root'
})
export class PhotographyService {
  private imagesUrl = 'assets/api/photography/images.json';
  
  constructor(private http: HttpClient) {}

  getImages(): Observable<IImage[]> {
    return this.http.get<IImage[]>(this.imagesUrl).pipe(
      tap(data => console.log(`images: ${data.length}`)),
      catchError(this.handleError)
    );
  }
  
  getImage(imageId: number): Observable<IImage | undefined> {
    return this.getImages().pipe(
      map((images:IImage[]) => images.find(i => i.id === imageId))
    ) 
  } 

  getImageIds(): Observable<any[] | undefined> {
    return this.getImages().pipe(
      map((image:IImage)  => image.id),
    )
  }

  private handleError(err: HttpErrorResponse) {
    let errMessage = ''
    if(err.error instanceof ErrorEvent) {
      errMessage = `An error occured: ${err.error.message}`;
    } else {
      errMessage = `Server returned code: ${err.status}, error message is ${err.message}`
    }
    console.error(errMessage);
    return throwError(errMessage);
  }
}
