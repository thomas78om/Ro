import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import {CreationComponent} from './creation/creation.component';

import { ConsulterComponent } from './consulter/consulter.component';
import { CreationActiviteComponent } from './creation-activite/creation-activite.component';
import { CreationActeGestionComponent } from './creation-acte-gestion/creation-acte-gestion.component';
import {CreationHComponent} from '../home/creation-h/creation-h.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  declarations: [
    CreationComponent,
    ConsulterComponent,
    CreationActiviteComponent,
    CreationActeGestionComponent
  ],
  entryComponents: [
    CreationComponent,
    ConsulterComponent,
    CreationActiviteComponent,
    CreationActeGestionComponent
  ],
  exports: [
    CreationComponent,
    ConsulterComponent,
    CreationActiviteComponent,
    CreationActeGestionComponent
  ],
  providers: [
  ]
})
export class ModalShareModule { }
