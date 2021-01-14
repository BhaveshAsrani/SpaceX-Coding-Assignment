import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacexHomePageComponentComponent } from './spacex-home-page-component/spacex-home-page-component.component';
import { SpacexPageNotFoundComponentComponent } from './spacex-page-not-found-component/spacex-page-not-found-component.component';

const routes: Routes = [
  {
    path: 'home',
    component: SpacexHomePageComponentComponent
  },
  {
    path: '',
    component: SpacexHomePageComponentComponent
  },
  {
    path: '**',
    component: SpacexPageNotFoundComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
