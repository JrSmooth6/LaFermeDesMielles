import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from 'src/interface/content.model';

@Component({
  selector: 'app-equipe',
  template: `
<div class="team-container">
  <div class="team-item" *ngFor="let item of content">
  <p class="team-text">{{ item.text }}</p>
    <img [src]="item.img" alt="Image d'équipe" class="team-img" />
    <img src="/assets/icon/icon-glasses.avif" class="icon"/>
    </div>
</div>
  `,
  styles: [
    `
    .team-container {
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Espacement entre les éléments */
  margin: 2rem auto;
  max-width: 800px;
  padding: 0 1rem; /* Marges pour les petits écrans */
}

.team-item {
  text-align: center; /* Centrer le contenu */
}

.team-text {
  color: rgb(110,193,228); /* Bleu similaire à celui de la classe bold */
  font-weight: bold; /* Applique le style gras */
  font-size: 1.1rem; /* Taille légèrement augmentée pour une meilleure lisibilité */
  line-height: 1.6; /* Espacement entre les lignes */
  margin: 1rem; /* Espacement avec l'image */
}
.icon{
  width: 50px;
  height: 50px;
  margin: 1rem;
}

.team-img {
  width: 100%;
  max-width: 600px; /* Limiter la largeur des images */
  border-radius: 10px; /* Coins arrondis pour un look moderne */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre subtile */
}

`
  ]
})
export class EquipeComponent implements OnInit {
  constructor(private http: HttpClient) { }

  content: Content[] = []; // Typage de la liste avec l'interface
  private contentUrl: string = 'assets/files/equipe.json';
  ngOnInit(): void {
    this.getContent().subscribe((data: Content[]) => {
      this.content = data; // Les données sont typées
    });
  }
  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>(this.contentUrl); // Typage de l'Observable
  }

}
