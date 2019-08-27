import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {bgModalColors} from '../../const/bgColor.modal';
const defaultBgColor: string = bgModalColors.primary;

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  bgColor: string = defaultBgColor;
  @Input()
  body: string;
  @Input()
  cancel: string;
  @Input()
  confirm: string;
  constructor(public activeModal: NgbActiveModal) {
    this.title = 'Consulter';
    this.body = '';
  }
  ngOnInit() {}

}
