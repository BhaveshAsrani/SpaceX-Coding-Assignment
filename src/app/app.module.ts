import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpacexHomePageComponentComponent } from './spacex-home-page-component/spacex-home-page-component.component';
import { SpacexFilterFacetComponentComponent } from './spacex-home-page-component/spacex-filter-facet-component/spacex-filter-facet-component.component';
import { SpacexLaunchCardComponentComponent } from './spacex-home-page-component/spacex-launch-card-component/spacex-launch-card-component.component';
import { SpacexPageNotFoundComponentComponent } from './spacex-page-not-found-component/spacex-page-not-found-component.component';
import { SpacexFilterServiceService } from './spacex-filter-service.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { LoaderComponentComponent } from './loader-component/loader-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SpacexHomePageComponentComponent,
    SpacexFilterFacetComponentComponent,
    SpacexLaunchCardComponentComponent,
    SpacexPageNotFoundComponentComponent,
    LoaderComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
