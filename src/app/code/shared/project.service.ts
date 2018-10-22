import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IProject } from './project.model';



@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectUrl = 'src/api/code/projects.json';
   
  constructor(private http: HttpClient) { }

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.projectUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
