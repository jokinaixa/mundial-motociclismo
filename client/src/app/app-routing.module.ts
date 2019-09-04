import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesListComponent } from './components/games-list/games-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';

import { PilotosListComponent } from './components/pilotos/pilotos-list/pilotos-list.component';
import { PilotoFormComponent } from './components/pilotos/piloto-form/piloto-form.component';

import { EquiposListComponent } from './components/equipos/equipos-list/equipos-list.component';
import { EquipoFormComponent } from './components/equipos/equipo-form/equipo-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },

  { path: 'games', component: GamesListComponent },
  { path: 'games/add', component: GameFormComponent },
  { path: 'games/edit/:id', component: GameFormComponent },

  { path: 'pilotos', component: PilotosListComponent },
  { path: 'pilotos/add', component: PilotoFormComponent },
  { path: 'pilotos/edit/:id', component: PilotoFormComponent },

  { path: 'equipos', component: EquiposListComponent },
  { path: 'equipos/add', component: EquipoFormComponent },
  { path: 'equipos/edit/:id', component: EquipoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
