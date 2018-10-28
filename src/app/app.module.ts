import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
// Page Components 
import { HomeComponent } from './home/home.component';
// import { CodeComponent } from './code/code.component';
// import { CodeListComponent } from './code/list/code-list.component';
//import { NormalizeTechTermsPipe } from './shared/pipes/normalize-tech-terms.pipe';

// import { PhotographyComponent } from './photography/photography.component';
// import { PhotographyDetailComponent } from './photography/detail/photography-detail.component';
// import { PhotographyGalleryComponent } from './photography/gallery/photography-gallery.component';
// import { PhotographyDetailGuard } from './photography/detail/photography-detail.guard';
import { PhotographyModule } from './photography/photography.module';

import { ContactComponent } from './contact/contact.component';
// Pipes 
//import { NormalizeTechTermsPipe } from './shared/pipes/normalize-tech-terms.pipe';
import { AdminComponent } from './admin/admin.component';
import { CodeModule } from './code/code.module';

const rootRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  //{ path: 'code', component: CodeComponent },
  // { path: 'photography', component: PhotographyComponent },
  // { path: 'photography/:id', 
  //   canActivate: [ PhotographyDetailGuard ],
  //   component: PhotographyDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
]; 

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CodeModule,
    RouterModule.forRoot(rootRoutes),
  ],
  declarations: [
    AppComponent,
    NavHeaderComponent,
    HomeComponent,  
    //CodeComponent,
    //CodeListComponent,
    PhotographyModule,
    // PhotographyComponent,
    // PhotographyDetailComponent,
    // PhotographyGalleryComponent,    
    //NormalizeTechTermsPipe,
    ContactComponent,
    AdminComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
