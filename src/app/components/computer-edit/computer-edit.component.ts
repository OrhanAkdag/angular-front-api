import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerService } from 'src/app/services/computer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-computer-edit',
  templateUrl: './computer-edit.component.html',
  styleUrls: ['./computer-edit.component.css']
})
export class ComputerEditComponent implements OnInit {

  computerForm: Computer;
  isLoading: boolean;

  brands: string[];
  types: string[];
  categories: string[];

  constructor(private activatedRoute: ActivatedRoute, private computerService: ComputerService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.brands = this.computerService.brand;
    this.types = this.computerService.type;
    this.categories = this.computerService.category;

    this.computerService.getComputerById(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.computerForm = data;
        this.isLoading = false;
      });
  }

  editComputer() {
    this.computerService.editComputer(this.computerForm).subscribe((data)=> {
      this.router.navigate(['/computers']);
      this.toastrService.success('Confirmé', 'l\'ordinateur à été édité');

    });
  }
}
