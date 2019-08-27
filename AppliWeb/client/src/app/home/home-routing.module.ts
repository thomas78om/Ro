import { HomeComponent } from './homeA/home.component';

import { Routes, RouterModule } from '@angular/router';


import {NgModule} from '@angular/core';
import { CreationHComponent } from './creation-h/creation-h.component';
import { ConsultationHComponent } from './consultation-h/consultation-h.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'creation',
    component: CreationHComponent
  }
  ,
  {
    path: 'consultation',
    component: ConsultationHComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
