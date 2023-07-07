import { Component } from '@angular/core';
import { NgbActiveModal, NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AddusermodalComponent} from '../addusermodal/addusermodal.component';
import {UserService} from '../user.service';
import {HttpUserService} from '../http-user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  modalRef!: NgbModalRef;

  constructor(private us: HttpUserService,
              private router: Router,
              private modalService: NgbModal) {
  }
  names = [
    'ThomasX2',
    'Lilian',
    'Pauline',
    'Christophe',
    'Florian'
  ]

  openModal() {
    this.modalRef = this.modalService.open(AddusermodalComponent)
    this.modalRef.componentInstance.title= 'Ajouter un utlisateur'
    this.modalRef.closed.subscribe(v =>{
      if(v.reason === 'ADD'){
        this.us.add(v.data).subscribe(v => this.router.navigateByUrl('/secondary'))
      }
    })
    this.modalRef.dismissed.subscribe(v => console.log('dismissed', v))
  }
}
