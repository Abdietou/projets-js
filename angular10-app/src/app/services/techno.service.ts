import { Injectable } from '@angular/core';
import { Technology } from '../model/technology';

@Injectable({
  providedIn: 'root',
})
export class TechnoService {
  private technos: Technology[] = [];

  constructor() {}

  createTechno(techno: Technology) {
    const newTechno = { id: Date.now(), ...techno };
    this.technos = [newTechno, ...this.technos];
    console.log(this.technos);
  }

  getTechno(): Technology[] {
    return this.technos;
  }

  deleteTechno(techno: Technology) {
    this.technos = this.technos.filter((t) => t.id !== techno.id);
  }
}
