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

import { LoginComponent } from './components/usuario/login/login.component';
import { ProfileComponent } from './components/usuario/profile/profile.component';
import { RegisterComponent } from './components/usuario/register/register.component';

import { AuthGuard } from './guards/auth.guard';

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
  { path: 'clasificaciones/add/:categoria/:circuito/:posicion', component: ClasificacionFormComponent },
  { path: 'clasificaciones/edit/:categoria/:circuito/:posicion/:id', component: ClasificacionFormComponent },

  { path: 'usuario/login', component: LoginComponent },
  { path: 'usuario/register', component: RegisterComponent },
  { path: 'usuario/profile', component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
