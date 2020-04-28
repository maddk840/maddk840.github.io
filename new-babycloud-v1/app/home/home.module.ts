import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

// 3rd party
import { OwlModule } from 'ngx-owl-carousel';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { HomeDistributionComponent } from './home-distribution/home-distribution.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { HomeSupportersComponent } from './home-supporters/home-supporters.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    // 3rd party
    OwlModule,
    NgxPageScrollModule,
    FontAwesomeModule
  ],
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    HomeAboutComponent,
    HomeProductsComponent,
    HomeDistributionComponent,
    HomeContactComponent,
    HomeSupportersComponent
  ],
  providers: [],
  entryComponents: []
})
export class HomeModule { }
