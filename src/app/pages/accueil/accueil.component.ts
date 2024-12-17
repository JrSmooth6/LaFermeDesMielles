import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-accueil',
  template: `
    <div class="container">
      <h1>Le Restaurant</h1>
      <p class="bold">
        Sarah, Cassandra, Stéphane et moi-même formons une équipe conviviale de passionnés de la restauration...
      </p>
      <img src="/assets/imgAcc.png" alt="Restaurant chaleureux" class="img">
      
      <h1>Notre équipe</h1>
      <button class="btn" aria-label="Voir la présentation de notre équipe" (click)="redirect('equipe')">
        Retrouvez ici la présentation complète de notre équipe
      </button>
      
      <h1>Nos ardoises du moment</h1>
      <p class="bold">Ainsi que notre semainier pour le midi.</p>
      <button class="btn" aria-label="Voir les ardoises" (click)="redirect('menu')">
        Nos ardoises du moment
      </button>
      
      <h1>Où nous trouver</h1>
      <div id="map"></div> <!-- Div pour la carte -->
    </div>
  `,
  styles: [
    `
      #map {
        height: 400px;
        width: 100%;
        margin: 2rem 0;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .container {
        text-align: center;
        margin: 2rem auto;
        padding: 0 1rem;
        max-width: 800px;
      }
      .container h1 {
        color: rgb(110, 193, 228);
        font-size: 2rem;
        margin-bottom: 1.5rem;
      }
      .container .bold {
        font-weight: 600;
        color: #444;
        line-height: 1.6;
        text-align: center;
        margin-bottom: 1.2rem;
      }
      .container .img {
        width: 100%;
        max-width: 600px;
        margin: 1.5rem 0;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .container .btn {
        background-color: rgb(110, 193, 228);
        color: white;
        padding: 0.8rem 1.5rem;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        margin-top: 1rem;
        transition: background-color 0.3s ease;
      }
      .container .btn:hover {
        background-color: #003d82;
      }
    `,
  ],
})
export class AccueilComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initMap();
  }

  redirect(param: string) {
    this.router.navigateByUrl(`/${param}`);
  }

  private initMap(): void {
    // Latitude et longitude du restaurant
    const latitude = 49.33254153537087; // Par exemple : une position en France
    const longitude = -1.7174283723598172;

    // Initialisation de la carte
    const map = L.map('map').setView([latitude, longitude], 16);

    // Ajout des tuiles gratuites OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Ajout d'un marqueur à la position spécifiée
    const marker = L.marker([latitude, longitude]).addTo(map);

    // Ajout d'un popup au marqueur
    marker.bindPopup('<b>Notre Restaurant</b><br>Nous sommes ici !').openPopup();
  }
}
