import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GamesListComponent } from './components/games-list/games-list.component';

// Services
import { GamesService } from './services/games.service';
import { GameFormComponent } from './components/game-form/game-form.component';
import { PilotosListComponent } from './pilotos/pilotos-list/pilotos-list.component';
import { EquiposListComponent } from './equipos/equipos-list/equipos-list.component';
import { PilotoFormComponent } from './components/pilotos/piloto-form/piloto-form.component';
import { PilotoListComponent } from './components/pilotos/piloto-list/piloto-list.component';
import { PilotosNavComponent } from './components/pilotos/pilotos-nav/pilotos-nav.component';
import { EquiposNavComponent } from './components/equipos/equipos-nav/equipos-nav.component';
import { EquipoFormComponent } from './components/equipos/equipo-form/equipo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GamesListComponent,
    GameFormComponent,
    PilotosListComponent,
    EquiposListComponent,
    PilotoFormComponent,
    PilotoListComponent,
    PilotosNavComponent,
    EquiposNavComponent,
    EquipoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
