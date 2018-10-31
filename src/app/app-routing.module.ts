import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Flat page components 
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent 
  }, { 
    path: 'contact', 
    component: ContactComponent 
  }, { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  }, {
    path: '**',
    component: NotFoundComponent
  }  
  // }, { 
  //   path: '**', 
  //   redirectTo: 'home', 
  //   pathMatch: 'full' 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }