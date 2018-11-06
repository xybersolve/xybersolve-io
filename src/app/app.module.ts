import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { NotFoundComponent } from './core/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    HomeComponent,  
    ContactComponent,
    AdminComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CodeModule,
    PhotographyModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
