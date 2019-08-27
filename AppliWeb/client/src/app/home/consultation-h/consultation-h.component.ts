import { Component, OnInit } from '@angular/core';
import {ModalHelperService} from '../../services/modal.helper.service';
import {ConsulterComponent} from '../../modal/consulter/consulter.component';

@Component({
  selector: 'app-consultation-h',
  templateUrl: './consultation-h.component.html',
  styleUrls: ['./consultation-h.component.css']
})
export class ConsultationHComponent implements OnInit {

  public isCollapsed = true;
  constructor( private modalHelperService: ModalHelperService) { }
  ngOnInit() {
  }
  public openModalConsulter(): void {
    this.modalHelperService
      .openXlModal(ConsulterComponent);
  }
}
