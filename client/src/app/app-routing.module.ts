import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilotosListComponent } from './components/pilotos/pilotos-list/pilotos-list.component';
import { PilotoFormComponent } from './components/pilotos/piloto-form/piloto-form.component';

import { EquiposListComponent } from './components/equipos/equipos-list/equipos-list.component';
import { EquipoFormComponent } from './components/equipos/equipo-form/equipo-form.component';

import { CircuitosListComponent } from './components/circuitos/circuitos-list/circuitos-list.component';
import { CircuitoFormComponent } from './components/circuitos/circuito-form/circuito-form.component';

import { ClasificacionesListComponent } from './components/clasificaciones/clasificaciones-list/clasificaciones-list.component';
import { ClasificacionFormComponent } from './components/clasificaciones/clasificacion-form/clasificacion-form.component';

import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  { path: 'inicio', component: InicioComponent },

  { path: 'pilotos/:categoria', component: PilotosListComponent },
  { path: 'pilotos/add/:categoria', component: PilotoFormComponent },
  { path: 'pilotos/edit/:categoria/:id', component: PilotoFormComponent },

  { path: 'equipos/:categoria', component: EquiposListComponent },
  { path: 'equipos/add/:categoria', component: EquipoFormComponent },
  { path: 'equipos/edit/:categoria/:id', component: EquipoFormComponent },

  { path: 'circuitos', component: CircuitosListComponent },
  { path: 'circuitos/add', component: CircuitoFormComponent },
  { path: 'circuitos/edit/:id', component: CircuitoFormComponent },

  { path: 'clasificaciones/:categoria/:circuito', component: ClasificacionesListComponent },
  { path: 'clasificaciones/add/:categoria/:circuito', component: ClasificacionFormComponent },
  { path: 'clasificaciones/edit/:categoria/:circuito/:id', component: ClasificacionFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
