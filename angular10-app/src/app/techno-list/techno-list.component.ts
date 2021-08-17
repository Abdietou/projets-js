import { Component, OnInit } from '@angular/core';
import { TechnoService } from '../services/techno.service';
import { Technology } from '../model/technology';

@Component({
  selector: 'app-techno-list',
  templateUrl: './techno-list.component.html',
  styleUrls: ['./techno-list.component.css'],
})
export class TechnoListComponent implements OnInit {
  allTechnos: Technology[] = [];
  constructor(private technoService: TechnoService) {}

  ngOnInit(): void {
    this.getTechnos();
  }

  getTechnos() {
    this.allTechnos = this.technoService.getTechno();
  }

  deleteTechno(tech: Technology) {
    this.technoService.deleteTechno(tech);
    this.allTechnos = this.technoService.getTechno();
  }
}
