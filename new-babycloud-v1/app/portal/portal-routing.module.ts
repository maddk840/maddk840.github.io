import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PortalComponent } from './portal.component';


// Routes
const routes: Routes = [
  {
    path: '',
    component: PortalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
