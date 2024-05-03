import { Component } from '@angular/core';
import { Avis } from '../model/Avis';
import { AvisService } from '../avis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent {
  avis: Avis[] = [];

  constructor(private  avisService: AvisService, private router: Router) {}
  
  onDeleteBloc(avis: Avis) {
    if (confirm("Voulez-vous supprimer la avis ?")) {
      if (avis.id !== undefined) {
        this.avisService.deleteAvis(avis.id).subscribe(() => {
          this.router.navigate(['/avis']).then(() => {
            window.location.reload();
          });
        });
      }
    }
  }
 
  ngOnInit(): void {
    this.loadUniversites();
  }
  
  loadUniversites() {
    this.avisService.getAllAvis().subscribe(
      data => {
        this.avis = data as Avis[];
        console.log('Avis:', data);
      },
      error => {
        console.error('Erreur lors de la récupération des avis', error);
      }
    );
  }


}
