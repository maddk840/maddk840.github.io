import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact.component';

// 3rd party
import { OwlModule } from 'ngx-owl-carousel';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    // 3rd party
    OwlModule,
    NgxPageScrollModule,
    FontAwesomeModule
  ]
})
export class ContactModule { }
