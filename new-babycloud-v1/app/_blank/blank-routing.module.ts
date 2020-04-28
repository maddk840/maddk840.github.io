import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BlankComponent } from './blank.component';


// Routes
const routes: Routes = [
  {
    path: '',
    component: BlankComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlankRoutingModule { }
