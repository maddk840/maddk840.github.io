import { Routes } from '@angular/router';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { AuthGuard } from './core/services/auth-guard.service';


export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    /*canActivate: [AuthGuard]*/
  },
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule',
    /*canActivate: [AuthGuard]*/
  },
  {
    path: 'mission',
    loadChildren: './mission/mission.module#MissionModule',
    /*canActivate: [AuthGuard]*/
  },
  {
    path: 'logger',
    loadChildren: './logger/logger.module#LoggerModule',
    /*canActivate: [AuthGuard]*/
  },
  {
    path: 'portal',
    loadChildren: './portal/portal.module#PortalModule',
    /*canActivate: [AuthGuard]*/
  },
  {
    path: 'team',
    loadChildren: './team/team.module#TeamModule',
    /*canActivate: [AuthGuard]*/
  },
  {
    path: 'careers',
    loadChildren: './careers/careers.module#CareersModule',
    /*canActivate: [AuthGuard]*/
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactModule',
    /*canActivate: [AuthGuard]*/
  },
  // {
  //   path: 'template',
  //   loadChildren: './template/template.module#TemplateModule',
  //   /*canActivate: [AuthGuard]*/
  // },
  {
    path: 'construction',
    component: UnderConstructionComponent,
    canActivate: [AuthGuard]
  },
  /*{
    path: 'demo',
    component: DemoComponent
  },*/
  {
    path: '**',
    redirectTo: 'home'
  }
];

