import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Core Components
import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';

// Page Components 
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';

// Internal Modules
import { CodeModule } from './code/code.module';
import { PhotographyModule } from './photography/photography.module';
import { AppRoutingModule } from './app-routing.module';
 

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    HomeComponent,  
    ContactComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      // { path: 'photography', component: PhotographyComponent },
      // { path: 'photography/:id', 
      //   canActivate: [ PhotographyDetailGuard ],
      //   component: PhotographyDetailComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    CodeModule,
    PhotographyModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
