import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';
import { ActivatedRoute } from '@angular/router';
import { Computer } from 'src/app/models/computer';

@Component({
  selector: 'app-computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.css']
})
export class ComputerDetailComponent implements OnInit {

  isLoading: boolean;
  computer: Computer;

  constructor(private computerService: ComputerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;
    this.computerService.getComputerById(id).subscribe((data: Computer) => {
      this.computer = data;
      this.isLoading = false;
  });
}
  calculMarge(){
    return this.computer.sellPrice - this.computer.buyPrice;
  }

}
