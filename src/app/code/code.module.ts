import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CodeRoutingModule  } from './code-routing.module';
import { CodeComponent } from './code.component';
import { CodeListComponent } from './list/code-list.component';
import { NormalizeTechTermsPipe } from './shared/normalize-tech-terms.pipe';

@NgModule({
  imports: [
    CommonModule,
    CodeRoutingModule,
    FormsModule
  ],
  declarations: [
    CodeComponent,
    CodeListComponent,
    NormalizeTechTermsPipe
  ]
  
})
export class CodeModule { }
