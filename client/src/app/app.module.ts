import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { GeneralService } from './services/general.service';
import { EquiposService } from './components/equipos/equipos.service';
import { PilotosService } from './components/pilotos/pilotos.service';
import { CircuitosService } from './components/circuitos/circuitos.service';
import { ClasificacionesService } from './components/clasificaciones/clasificaciones.service';

// Components
import { InicioComponent } from './components/inicio/inicio.component';

import { PilotoFormComponent } from './components/pilotos/piloto-form/piloto-form.component';
import { PilotosListComponent } from './components/pilotos/pilotos-list/pilotos-list.component';
import { PilotosNavComponent } from './components/pilotos/pilotos-nav/pilotos-nav.component';
import { PilotoFichaComponent } from './components/pilotos/piloto-ficha/piloto-ficha.component';

import { EquipoFormComponent } from './components/equipos/equipo-form/equipo-form.component';
import { EquiposListComponent } from './components/equipos/equipos-list/equipos-list.component';
import { EquiposNavComponent } from './components/equipos/equipos-nav/equipos-nav.component';
import { EquipoFichaComponent } from './components/equipos/equipo-ficha/equipo-ficha.component';

import { CircuitoFormComponent } from './components/circuitos/circuito-form/circuito-form.component';
import { CircuitosListComponent } from './components/circuitos/circuitos-list/circuitos-list.component';
import { CircuitoFichaComponent } from './components/circuitos/circuito-ficha/circuito-ficha.component';

import { ClasificacionFormComponent } from './components/clasificaciones/clasificacion-form/clasificacion-form.component';
import { ClasificacionesListComponent } from './components/clasificaciones/clasificaciones-list/clasificaciones-list.component';
import { ClasificacionesNavComponent } from './components/clasificaciones/clasificaciones-nav/clasificaciones-nav.component';

import { NavegadorComponent } from './components/navegador/navegador.component';

// Pipes
import { OrderByPipe } from './pipes/order-by.pipe';
import { DistinctPipe } from './pipes/distinct.pipe';
import { FilterNombrePipe } from './pipes/filter-nombre.pipe';
import { FilterMotoPipe } from './pipes/filter-moto.pipe';
import { FilterPilotoPipe } from './pipes/filter-piloto.pipe';
import { ClasificacionesPilotoComponent } from './components/clasificaciones/clasificaciones-piloto/clasificaciones-piloto.component';
import { ClasificacionesCircuitoComponent } from './components/clasificaciones/clasificaciones-circuito/clasificaciones-circuito.component';
import { PilotosEquipoComponent } from './components/pilotos/pilotos-equipo/pilotos-equipo.component';
import { ClasificacionesFichaComponent } from './components/clasificaciones/clasificaciones-ficha/clasificaciones-ficha.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotosListComponent,
    PilotoFormComponent,
    PilotosListComponent,
    PilotosNavComponent,
    PilotoFichaComponent,
    EquiposNavComponent,
    EquiposListComponent,
    EquipoFormComponent,
    InicioComponent,
    CircuitoFormComponent,
    CircuitosListComponent,
    ClasificacionFormComponent,
    ClasificacionesListComponent,
    ClasificacionesNavComponent,
    CircuitoFichaComponent,
    NavegadorComponent,
    EquipoFichaComponent,
    OrderByPipe,
    DistinctPipe,
    FilterNombrePipe,
    FilterMotoPipe,
    FilterPilotoPipe,
    ClasificacionesPilotoComponent,
    ClasificacionesCircuitoComponent,
    PilotosEquipoComponent,
    ClasificacionesFichaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GeneralService,
    EquiposService,
    PilotosService,
    CircuitosService,
    ClasificacionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
