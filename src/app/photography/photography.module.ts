import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PhotographyComponent } from './photography.component';
import { PhotographyGalleryComponent } from './gallery/photography-gallery.component';
import { PhotographyDetailComponent } from './detail/photography-detail.component'
import { PhotographyDetailGuard } from './detail/photography-detail.guard';

const photographyRoutes: Routes = [
  { path: 'photography', component: PhotographyComponent },
  { path: 'photography/:id', 
    canActivate: [ PhotographyDetailGuard ],
    component: PhotographyDetailComponent 
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(photographyRoutes)
  ],
  declarations: [
    PhotographyComponent,
    PhotographyDetailComponent,
    PhotographyGalleryComponent
  ],
  providers:[],
  exports:[]
})
export class PhotographyModule { }
