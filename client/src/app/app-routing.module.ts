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
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

  { path: 'inicio', component: InicioComponent },

  { path: 'pilotos', component: PilotosListComponent },
  { path: 'pilotos/add', component: PilotoFormComponent },
  { path: 'pilotos/edit/:id', component: PilotoFormComponent },

  { path: 'equipos', component: EquiposListComponent },
  { path: 'equipos/add', component: EquipoFormComponent },
  { path: 'equipos/edit/:id', component: EquipoFormComponent },

  { path: 'circuitos', component: CircuitosListComponent },
  { path: 'circuitos/add', component: CircuitoFormComponent },
  { path: 'circuitos/edit/:id', component: CircuitoFormComponent },

  { path: 'clasificaciones', component: ClasificacionesListComponent },
  { path: 'clasificaciones/show/:circuito', component: ClasificacionesListComponent },
  { path: 'clasificaciones/add/:circuito/:categoria', component: ClasificacionFormComponent },
  { path: 'clasificaciones/edit/:circuito/:categoria/:id', component: ClasificacionFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
