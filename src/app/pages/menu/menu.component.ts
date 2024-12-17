import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuDuJour } from 'src/interface/menu.model';

@Component({
  selector: 'app-menu',
  template: `
<div class="hero">
  <h1>Menu</h1>
  <p>
    À la ferme des Mielles, notre équipe choisira son ardoise en fonction des saisons et de nos humeurs.
    Nous vous invitons à passer un moment convivial autour d'une bonne table.
  </p>
  <div class="select-container">
    <select name="menu" id="menu" class="styled-select" (change)="onMenuChange($event)">
      <option *ngFor="let menuDuJour of menu" [value]="menuDuJour.jour">
        {{ menuDuJour.jour }}
      </option>
    </select>
  </div>
  <div class="menu-details" *ngIf="menuDuJour">
    <h2>Menu du {{ menuDuJour.jour }}</h2>
    <h3>Entrées</h3>
    <ul>
      <li *ngFor="let entree of menuDuJour.entrees">{{ entree }}</li>
    </ul>
    <h3>Plats</h3>
    <ul>
      <li *ngFor="let plat of menuDuJour.plats">{{ plat }}</li>
    </ul>
    <h3>Desserts</h3>
    <ul>
      <li *ngFor="let dessert of menuDuJour.desserts">{{ dessert }}</li>
    </ul>
    <img src="/assets/icon/icon-glasses.avif" class="icon"/>

  </div>
</div>

  `,
  styles: [
    `/* Conteneur principal du menu */
.hero {
  text-align: center;
  padding: 4rem 2rem;
  background-color: #f0f0f0;
  color: #333;
}

h1 {
  font-size: 3rem;
  color: #1f6b7a; /* Bleu plus sobre */
  margin-bottom: 1.5rem;
  font-family: 'Roboto', sans-serif;
}
.icon{
  width: 50px;
  height: 50px;
  margin: 1rem;
}

p {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-family: 'Roboto', sans-serif;
}

/* Conteneur du select */
/* Conteneur du select */
.select-container {
  display: inline-block;
  text-align: center;
  width: 100%;
}

/* Style du select pour un aspect plus élégant */
.styled-select {
  padding: 1rem ; /* Ajoute de l'espace intérieur pour rendre le select plus spacieux */
  font-size: 1.2rem;
  color: #333;
  background-color: #fff;
  border: 2px solid #ccc; /* Bordure neutre */
  border-radius: 8px; /* Bord arrondi plus doux */
  appearance: none; /* Enlève les styles par défaut */
  outline: none;
  cursor: pointer; /* Change le curseur pour indiquer qu'il est interactif */
  transition: all 0.3s ease;
  width: 100%;
  max-width: 350px; /* Limite la taille du select */
  text-align: center; /* Centre le texte à l'intérieur */
}

/* Améliorations visuelles au survol et au focus */
.styled-select:hover,
.styled-select:focus {
  border-color: #1f6b7a; /* Ajoute un bleu plus discret au focus */
  box-shadow: 0 0 8px rgba(31, 107, 122, 0.5); /* Ombre douce au focus */
}

/* Pour ajouter une flèche personnalisée */
.styled-select::-ms-expand {
  display: none; /* Cache la flèche par défaut sur les anciens navigateurs */
}

.styled-select::after {
  content: '\f0dc'; /* Code Unicode pour une flèche descendante */
  font-family: "Font Awesome 5 Free"; /* Utilise Font Awesome pour la flèche */
  font-weight: 900;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #333; /* Couleur de la flèche */
  pointer-events: none; /* Empêche l'interaction avec la flèche */
}

/* Responsive */
@media screen and (max-width: 768px) {
  .styled-select {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
}

/* Section des détails du menu */
.menu-details {
  background-color: #fff;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center; /* Centrer les éléments */
}

.menu-details h2 {
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.menu-details h3 {
  font-size: 1.6rem;
  color: #555;
  margin-top: 1.5rem;
}

.menu-details ul {
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centre horizontalement les items */
  justify-content: center;
}

.menu-details ul li {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 0.5rem;
  padding-left: 0;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .styled-select {
    font-size: 1rem;
  }

  .menu-details h2 {
    font-size: 2rem;
  }

  .menu-details h3 {
    font-size: 1.4rem;
  }
}

    
    .select-container {
      display: inline-block;
      margin-top: 1rem;
      text-align: left;
    }
    
    .select-label {
      display: block;
      font-size: 1rem;
      margin-bottom: 0.5rem;
      color: #333; /* Texte sombre */
    }
    
    .styled-select {
      width: 100%;
      max-width: 300px; /* Largeur limitée */
      padding: 0.8rem;
      font-size: 1rem;
      border: 2px solid rgb(110, 193, 228); /* Bordure bleue */
      border-radius: 8px; /* Coins arrondis */
      background-color: #fff; /* Fond blanc */
      color: #333; /* Texte sombre */
      appearance: none; /* Supprime le style par défaut */
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .styled-select:hover,
    .styled-select:focus {
      border-color: #007ebc; /* Bordure plus foncée au survol */
      box-shadow: 0 0 5px rgba(0, 126, 188, 0.5); /* Effet d’ombre */
    }
    
    .styled-select option {
      font-size: 1rem;
      padding: 0.5rem;
    }
    
    .styled-select:focus {
      outline: none;
    }
    
    `
  ]
})
export class MenuComponent implements OnInit {

  constructor(private http : HttpClient) { }
  private contentUrl: string = 'assets/files/menu.json';

  menu : MenuDuJour[] = [];
  menuDuJour!: MenuDuJour;
  ngOnInit(): void {
      this.getContent().subscribe((data: MenuDuJour[]) => {
        this.menu = data;
        this.menuDuJour = this.menu[0];
        // Les données sont typées
      });
    }
    getContent(): Observable<MenuDuJour[]> {
      return this.http.get<MenuDuJour[]>(this.contentUrl); // Typage de l'Observable
    }
    onMenuChange(event: Event): void {
      const selectedJour = (event.target as HTMLSelectElement).value; // Récupère le jour sélectionné
      this.menuDuJour = this.menu.find(menu => menu.jour === selectedJour)!; // Trouve le menu correspondant
    }

}
