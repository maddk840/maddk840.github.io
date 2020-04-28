import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent,
  ],
  imports: [
    CoreModule,
    HttpModule,
    SharedModule,
    RouterModule.forRoot(rootRouterConfig, {
      useHash: false,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
