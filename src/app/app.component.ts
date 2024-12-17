import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <footer>
      <app-footer></app-footer>
    </footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'la-ferme-des-mielles';
}
