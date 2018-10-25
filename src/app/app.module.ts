import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
// Page Components 
import { HomeComponent } from './home/home.component';
import { CodeComponent } from './code/code.component';
import { CodeListComponent } from './code/list/code-list.component';
import { PhotographyComponent } from './photography/photography.component';
import { PhotographyDetailComponent } from './photography/detail/photography-detail.component';
import { PhotographyGalleryComponent } from './photography/gallery/photography-gallery.component';
import { ContactComponent } from './contact/contact.component';
// Pipes 
import { NormalizeTechTermsPipe } from './shared/pipes/normalize-tech-terms.pipe';
 


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    HomeComponent,  
    CodeComponent,
    CodeListComponent,
    PhotographyComponent,
    PhotographyDetailComponent,
    PhotographyGalleryComponent,    
    NormalizeTechTermsPipe,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'code', component: CodeComponent },
      { path: 'photography', component: PhotographyComponent },
      { path: 'photography/:id', component: PhotographyDetailComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
