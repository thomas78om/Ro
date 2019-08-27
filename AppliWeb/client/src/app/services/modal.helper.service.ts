import {Injectable} from '@angular/core';
import {NgbModal, NgbModalOptions, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ModalHelperService {

  constructor(private modalService: NgbModal) {
  }

  openXlModal(component: any): NgbModalRef {
    return this.openModal(component, 'xl');
  }

  openLgModal(component: any): NgbModalRef {
    return this.openModal(component, 'lg');
  }

  openSmModal(component: any): NgbModalRef {
    return this.openModal(component, 'sm');
  }

  private openModal(component: any, size: 'sm' | 'lg' | 'xl'): NgbModalRef {
    const modalOptions: NgbModalOptions = {
      windowClass: 'mt-5',
      size: size as 'sm' | 'lg',
      backdrop: 'static'
    };
    return this.modalService.open(component, modalOptions);
  }

}
