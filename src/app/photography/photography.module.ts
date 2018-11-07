import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotographyComponent } from './photography.component';
import { PhotographyDetailComponent } from './detail/photography-detail.component';
import { PhotographyRoutingModule } from './photography-routing.module';
import { PhotographyGalleryComponent } from './gallery/photography-gallery.component';

@NgModule({
  imports: [
    CommonModule,
    PhotographyRoutingModule
  ],
  declarations: [
    PhotographyComponent,
    PhotographyDetailComponent,
    PhotographyGalleryComponent
  ]
})
export class PhotographyModule { }
