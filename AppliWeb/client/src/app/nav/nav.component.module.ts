import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {AppRoutingModule} from '../app-routing.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalHelperService} from '../services/modal.helper.service';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbDropdownModule,

  ],
  declarations: [
    NavComponent
  ],
  exports: [
    NavComponent
  ],
  providers: [ModalHelperService]
})
export class NavModule { }
