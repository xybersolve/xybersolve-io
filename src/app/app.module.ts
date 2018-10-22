import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { HomeComponent } from './home/home.component';
import { CodeComponent } from './code/code.component';
import { CodeListComponent } from './code/code-list.component';
import { PhotographyComponent } from './photography/photography.component';
import { NormalizeTechTermsPipe } from './shared/pipes/normalize-tech-terms.pipe';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    HomeComponent,  
    CodeComponent,
    CodeListComponent,
    PhotographyComponent,
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
