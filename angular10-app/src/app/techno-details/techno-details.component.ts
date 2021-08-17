import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Technology } from '../model/technology';

@Component({
  selector: 'app-techno-details',
  templateUrl: './techno-details.component.html',
  styleUrls: ['./techno-details.component.css'],
})
export class TechnoDetailsComponent implements OnInit {
  @Input() tech: Technology;
  @Output() deleteTech = new EventEmitter<Technology>();

  constructor() {}

  ngOnInit(): void {}

  delete(tech: Technology) {
    this.deleteTech.emit(tech);
  }
}
