import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FournisseursComponent } from './pages/fournisseurs/fournisseurs.component';

const routes: Routes = [
  {path : '', component : AccueilComponent},
  {path : 'equipe', component : EquipeComponent},
  {path : 'menu', component : MenuComponent},
  {path : 'fournisseurs', component : FournisseursComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
