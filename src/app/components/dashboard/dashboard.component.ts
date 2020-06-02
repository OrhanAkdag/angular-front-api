import { Component, OnInit, TemplateRef } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/services/computer.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faEye = faEye;
  faEdit = faEdit;
  faTrash = faTrash;
  faPlusCircle = faPlusCircle;

  computers: Computer[]
  isLoading: boolean;
  modalRef: BsModalRef;
  clicked = false;
  message: string;

  constructor(private modalService: BsModalService,private computerService: ComputerService , private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.computerService.getComputers().subscribe((data: Computer[]) =>{
      this.computers = data['hydra:member'];
      console.log(data);
      this.isLoading = false;
    });
  }

  deleteComputer(computer: Computer) {
    this.isLoading = true;
    this.computerService.deleteComputer(computer).subscribe(data => {
      this.computerService.getComputers().subscribe(allComputer => {
        this.computers = allComputer;
        this.isLoading = false;
        this.clicked = true;
        this.modalRef.hide();
        this.toastrService.success('Confirmé', 'Suppression de l\'ordinateur: ' + computer.id);
        setTimeout(() => this.clicked = false,1000);

      });
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  decline(): void {
    this.clicked = true;
    this.message = 'Declined!';
    this.modalRef.hide();
    this.toastrService.error('Annulé', 'Opération annulé');
    setTimeout(() => this.clicked = false,1000);
  }

  calculMarge(computer: Computer){
    return computer.sellPrice - computer.buyPrice;
  }

}
