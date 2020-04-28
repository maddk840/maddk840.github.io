import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalRoutingModule } from './portal-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { PortalComponent } from './portal.component';

// 3rd party
import { OwlModule } from 'ngx-owl-carousel';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PortalComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    // 3rd party
    OwlModule,
    NgxPageScrollModule,
    FontAwesomeModule
  ]
})
export class PortalModule { }
