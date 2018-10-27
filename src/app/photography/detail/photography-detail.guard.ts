import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotographyService } from '../shared/photography.service'

@Injectable({
  providedIn: 'root'
})
export class PhotographyDetailGuard implements CanActivate {
  imageIds: any[];

  constructor(
    private router: Router, 
    private photographyService: PhotographyService
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('next:');
      console.log(next);
      console.log('state:');
      console.log(state);
      // id is 2nd segment 'path' of url array, from 'next' object (ActivatedRouteSnapshot)  
      let imageId = +next.url[1].path;
      // TODO: pull valid image ids from IImages[] object and guard route on these 
      // this.photographyService.getImageIds().subscribe(
      //   imageIds => this.imageIds = imageIds        
      // )
      if (isNaN(imageId) || imageId < 0) {
        console.log(`Ivalid image id: ${imageId}`);
        this.router.navigate(['/photography']); 
        return false;
      } 
      return true;
  }
}
