import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CareersComponent } from './careers.component';


// Routes
const routes: Routes = [
  {
    path: '',
    component: CareersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareersRoutingModule { }
