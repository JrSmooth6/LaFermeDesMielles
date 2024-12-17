import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="footer-section">
        <h3>A propos</h3>
        <ul>
          <li><a (click)="redirect('equipe')">L'équipe</a></li>
          <li><a (click)="redirect('menu')">Menu</a></li>
          <li><a (click)="redirect('fournisseurs')">Nos fournisseurs</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Confidentialité</h3>
        <ul>
          <li><a (click)="redirect('')">Politique de confidentialité</a></li>
          <li><a (click)="redirect('')">Conditions générales</a></li>
          <li><a (click)="redirect('')">Nous contacter</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Réseaux sociaux</h3>
        <ul class="social-links">
          <li><a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a></li>
        </ul>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        background-color: #f0f0f0;
        padding: 2rem 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border-top: 1px solid #ddd;
      }

      .footer-section {
        flex: 1 1 calc(33% - 2rem); /* Trois colonnes sur grands écrans */
        margin: 1rem;
        min-width: 250px; /* Pour un affichage correct sur petits écrans */
      }

      .footer-section h3 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: #333;
      }

      .footer-section ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .footer-section li {
        margin-bottom: 0.5rem;
      }

      .footer-section a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
      }

      .footer-section a:hover {
        text-decoration: underline;
      }

      /* Liens réseaux sociaux */
      .social-links {
        display: flex;
        gap: 1rem;
      }

      .social-links li {
        display: inline-block;
      }

      /* Responsive pour petits écrans */
      @media (max-width: 768px) {
        .footer {
          flex-direction: column;
          align-items: center;
        }

        .footer-section {
          flex: 1 1 100%; /* Colonnes empilées sur petits écrans */
          text-align: center;
          margin: 1rem 0;
        }

        .social-links {
          justify-content: center;
        }
      }
    `
  ]
})
export class FooterComponent implements OnInit {
  constructor(private router : Router) { }
  ngOnInit(): void {
    
  }
  redirect(param : string) {
    this.router.navigateByUrl(`/${param}`);
  }

}

