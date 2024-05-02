import { Ressources } from './ressources'; // Assuming you have a Resource model
import { Service } from './service'; // Assuming you have a Service model
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


export class Subject {
  subject_id: number;
  subject_name: string;
  ressources: Ressources[];
  services: Service[];
  showUpdateForm?: boolean; // Optional property for update form visibility
  updateForm?: FormGroup; // Optional property for update form

  constructor(subject_id: number, subject_name: string, ressources: Ressources[], services: Service[]) {
    this.subject_id = subject_id;
    this.subject_name = subject_name;
    this.ressources = ressources;
    this.services = services;
  }
}