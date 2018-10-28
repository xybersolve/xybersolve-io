import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CodeComponent } from './code.component'

const codeRoutes: Routes = [
  { 
    path: 'code', 
    component: CodeComponent 
  }
]

@NgModule({
  imports: [RouterModule.forChild(codeRoutes)],
  exports: [RouterModule]
})
export class CodeRoutingModule {} 