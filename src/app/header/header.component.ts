import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <div class="logo-container">
        <img src="assets/logo.png" alt="Logo" class="logo" (click)="redirect('')">
      </div>
      <button class="nav-toggle" aria-label="Ouvrir le menu" (click)="toggleMenu()">&#9776;</button>
      <nav class="nav" [class.active]="menuOpen">
        <ul class="nav-list">
          <li (click)="navigateAndCloseMenu('equipe')"><a >L'équipe</a></li>
          <li (click)="navigateAndCloseMenu('menu')"><a >Menu</a></li>
          <li (click)="navigateAndCloseMenu('fournisseurs')"><a >Nos fournisseurs</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [
    `
      /* Header container */
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: #f0f0f0;
        border-bottom: 1px solid #ddd;
      }

      /* Logo styles */
      .logo-container {
        display: flex;
        align-items: center;
      }

      .logo {
        height: 50px;
        cursor: pointer;
      }

      /* Navigation styles */
      .nav {
        display: flex;
      }

      .nav-list {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .nav-list li {
        margin-left: 1.5rem;
      }

      .nav-list a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
      }

      .nav-list a:hover {
        text-decoration: underline;
      }

      /* Burger menu button (hidden by default) */
      .nav-toggle {
        display: none;
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
      }

      /* Responsive styles */
      @media (max-width: 768px) {
        .nav {
    display: none; /* Par défaut, le menu est caché */
    position: absolute;
    top: 80px; /* Décale le menu sous le header */
    right: 0;
    background-color: #f0f0f0;
    width: 100%; /* Prend toute la largeur */
    text-align: center; /* Centre le contenu */
    border-top: 1px solid #ddd; /* Ligne de séparation */
    z-index: 3; /* Assure que le menu est au-dessus des autres éléments */
    padding-top: 1.5rem; /* Ajoute un espace au-dessus */
    padding-bottom: 1rem; /* Ajoute un espace en bas */
  }

        .nav.active {
          display: block;
        }

        .nav-list {
          flex-direction: column;
        }

        .nav-list li {
          margin: 1rem 0;
        }

        .nav-toggle {
          display: block;
        }
      }
    `
  ]
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private router: Router) { }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigateAndCloseMenu(route: string) {
    this.menuOpen = false; // Ferme le menu après la navigation
    this.redirect(route);
  }

  redirect(param: string) {
    this.router.navigateByUrl(`/${param}`);
  }
}
