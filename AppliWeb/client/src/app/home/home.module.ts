import { HomeComponent } from './homeA/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

import {NgModule} from '@angular/core';
import { CreationHComponent } from './creation-h/creation-h.component';
import { ConsultationHComponent } from './consultation-h/consultation-h.component';
import {HomeRoutingModule} from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [

    HomeComponent,

    CreationHComponent,

    ConsultationHComponent,

  ],
  imports: [CommonModule, NgbModule , NgSelectModule, HomeRoutingModule, FormsModule, FontAwesomeModule ],
  exports: [RouterModule]
})
export class HomeModule {
}
