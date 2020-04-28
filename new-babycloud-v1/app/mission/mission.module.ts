import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionRoutingModule } from './mission-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { MissionComponent } from './mission.component';

// 3rd party
import { OwlModule } from 'ngx-owl-carousel';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MissionMainComponent } from './mission-main/mission-main.component';
import { MissionValuesComponent } from './mission-values/mission-values.component';

@NgModule({
  declarations: [MissionComponent, MissionMainComponent, MissionValuesComponent],
  imports: [
    CommonModule,
    MissionRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    // 3rd party
    OwlModule,
    NgxPageScrollModule,
    FontAwesomeModule
  ]
})
export class MissionModule { }
