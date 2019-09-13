import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { GamesService } from './services/games.service';
import { EquiposService } from './components/equipos/equipos.service';
import { PilotosService } from './components/pilotos/pilotos.service';

import { GameFormComponent } from './components/game-form/game-form.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { PilotoFormComponent } from './components/pilotos/piloto-form/piloto-form.component';
import { PilotosListComponent } from './components/pilotos/pilotos-list/pilotos-list.component';
import { PilotosNavComponent } from './components/pilotos/pilotos-nav/pilotos-nav.component';
import { PilotoFichaComponent } from './components/pilotos/piloto-ficha/piloto-ficha.component';

import { EquipoFormComponent } from './components/equipos/equipo-form/equipo-form.component';
import { EquiposListComponent } from './components/equipos/equipos-list/equipos-list.component';
import { EquiposNavComponent } from './components/equipos/equipos-nav/equipos-nav.component';

import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GamesListComponent,
    GameFormComponent,
    PilotosListComponent,
    PilotoFormComponent,
    PilotosListComponent,
    PilotosNavComponent,
    EquiposNavComponent,
    EquiposListComponent,
    EquipoFormComponent,
    PilotoFichaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService,
    EquiposService,
    PilotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
