import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from 'src/interface/content.model';

@Component({
  selector: 'app-fournisseurs',
  template: `
    <div class="container">
      <h1>Nos fournisseurs</h1>
      <p class="bold"> Nous avons à cœur de sélectionner des produits de qualité, en privilégiant les fournisseurs locaux et les petits producteurs. Cette démarche nous permet de vous proposer des ingrédients frais et authentiques, tout en soutenant l’agriculture locale.</p>
      <img src="/assets/icon/icon-glasses.avif" class="icon"/>
      <div class="fournisseurs-container">
        <div class="fournisseurs-item" *ngFor="let item of content">
        <p class="fournisseurs-text">{{ item.text }}</p>  
        <p class="fournisseurs-text2">{{ item.img }}</p>  
        <img src="/assets/icon/icon-glasses.avif" class="icon"/>

          
        </div>
    </div>
  `,
  styles: [
    `
    .container {
  text-align: center; /* Centrer tout le contenu */
  margin: 2rem auto;
  max-width: 800px; /* Largeur maximale pour un contenu lisible */
  padding: 0 1rem; /* Marges pour les petits écrans */
}

.container h1 {
  color:rgb(110,193,228); /* Même bleu que les autres titres */
  font-size: 2rem; /* Taille des titres */
  margin-bottom: 1rem; /* Espacement sous le titre */
}

.container .bold {
  font-weight: 600; /* Gras modéré pour un style plus subtil */
  line-height: 1.6; /* Espacement vertical entre les lignes pour plus de lisibilité */
  text-align: center; /* Texte centré */
  margin-bottom: 1.2rem; /* Espacement réduit sous le texte */
}

.fournisseurs-container {
  display: flex;
  flex-direction: column; /* Dispose les éléments verticalement */
  gap: 1.5rem; /* Espacement entre chaque fournisseur */
  margin-top: 2rem;
}

.fournisseurs-item {
  display: flex;
  flex-direction: column; /* Texte et image alignés verticalement */
  align-items: center; /* Centre le contenu */
  padding: 1rem;
  border-radius: 10px; /* Coins arrondis */
}

.fournisseurs-text {

  font-size: 2rem;
  font-weight: bold; /* Texte en gras */
  margin-bottom: 1rem; /* Espacement entre le texte et l'image */
}
.fournisseurs-text2 {
  font-size: 1.2rem;
  margin-bottom: 1rem; /* Espacement entre le texte et l'image */
}

.icon{
  width: 50px;
  height: 50px;
  margin: 1rem;
}


    `
  ]
})
export class FournisseursComponent {
    content: Content[] = []; // Typage de la liste avec l'interface
    private contentUrl: string = 'assets/files/fournisseurs.json';
    constructor(private http: HttpClient) { }
    ngOnInit(): void {
      this.getContent().subscribe((data: Content[]) => {
        this.content = data; // Les données sont typées
      });
    }
    getContent(): Observable<Content[]> {
      return this.http.get<Content[]>(this.contentUrl); // Typage de l'Observable
    }
  

}
