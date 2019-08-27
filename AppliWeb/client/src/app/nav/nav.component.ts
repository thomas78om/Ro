import { Component, OnInit } from '@angular/core';
import {ModalHelperService} from '../services/modal.helper.service';
import {CreationComponent} from '../modal/creation/creation.component';

import {ConsulterComponent} from '../modal/consulter/consulter.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private modalHelperService: ModalHelperService) { }

  ngOnInit() {
  }

  public openModalCreation(): void {
    this.modalHelperService
      .openXlModal(CreationComponent);
  }
  public openModalConsulter(): void {
    this.modalHelperService
      .openXlModal(ConsulterComponent);
  }

}
