import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PhotographyComponent } from './photography.component';
import { PhotographyDetailComponent } from './detail/photography-detail.component';
import { PhotographyDetailGuard } from './detail/photography-detail.guard';

const routes: Routes = [
  { path: 'photography', component: PhotographyComponent },
  { path: 'photography/:id', 
    canActivate: [ PhotographyDetailGuard ],
    component: PhotographyDetailComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotographyRoutingModule {} 