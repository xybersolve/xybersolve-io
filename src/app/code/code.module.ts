import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CodeComponent } from './code.component';
import { CodeListComponent } from './list/code-list.component';
import { NormalizeTechTermsPipe } from './shared/normalize-tech-terms.pipe';

const codeRoutes: Routes = [
  { path: 'code', component: CodeComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(codeRoutes)
  ],
  declarations: [
    CodeComponent,
    CodeListComponent,
    NormalizeTechTermsPipe
  ]
})
export class CodeModule { }
