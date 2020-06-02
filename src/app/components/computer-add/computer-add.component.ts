import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/services/computer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-computer-add',
  templateUrl: './computer-add.component.html',
  styleUrls: ['./computer-add.component.css']
})
export class ComputerAddComponent implements OnInit {

  computerForm: Computer;

  brands: string[];
  types: string[];
  categories: string[];

  constructor(private computerService: ComputerService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.brands = this.computerService.brand;
    this.types = this.computerService.type;
    this.categories = this.computerService.category;

    this.computerForm = new Computer();
  }

  addComputer() {
    this.computerService.addComputer(this.computerForm).subscribe(data => {
      this.router.navigate(['/computers']);
      this.toastrService.success('Confirmé', 'l\'ordinateur à été ajouté ');
    });
  }

}
