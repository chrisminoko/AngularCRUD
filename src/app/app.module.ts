import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import {RouterModule} from '@angular/router'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenueComponent } from './Components/side-menue/side-menue.component';
import {HttpClientModule} from '@angular/common/http'
import { AddBettypesComponent } from './Components/add-bettypes/add-bettypes.component';
import { FetchBettypesComponent } from './Components/fetch-bettypes/fetch-bettypes.component';
import { SportsComponent } from './Components/sports/sports.component';
import { AddSportComponent } from './components/add-sport/add-sport.component';
import { CountriesComponent } from './Components/countries/countries.component';
import { FetchtournamentComponent } from './Components/fetchtournament/fetchtournament.component';
import { AddTournamentComponent } from './Components/add-tournament/add-tournament.component';
import { MarketsComponent } from './components/markets/markets.component';
import { FetchEventsComponent } from './components/fetch-events/fetch-events.component';
import { AddEventsComponent } from './components/add-events/add-events.component';



@NgModule({
  declarations: [
    AppComponent,
    SideMenueComponent,

    AddBettypesComponent,
    FetchBettypesComponent,
    SportsComponent,
    AddSportComponent,
    CountriesComponent,
    FetchtournamentComponent,
    AddTournamentComponent,
    MarketsComponent,
    FetchEventsComponent,
    AddEventsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
