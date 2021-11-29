import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FetchBettypesComponent } from './Components/fetch-bettypes/fetch-bettypes.component';
import { AddBettypesComponent } from './Components/add-bettypes/add-bettypes.component';
import { SportsComponent } from './Components/sports/sports.component';
import { AddSportComponent } from './components/add-sport/add-sport.component';
import { CountriesComponent } from '../app/Components/countries/countries.component';
import { AddCountriesComponent } from './Components/AddCountries/AddCountries.component';
import { FetchtournamentComponent } from './Components/fetchtournament/fetchtournament.component';
import { AddTournamentComponent } from './Components/add-tournament/add-tournament.component';
import { MarketsComponent } from './Components/markets/markets.component';
import { FetchEventsComponent } from './Components/fetch-events/fetch-events.component';
import { AddEventsComponent } from './components/add-events/add-events.component';


const routes: Routes = [
  {path : '', redirectTo:'/bettypes',pathMatch:'full'},
  { path: 'bettypes', component: FetchBettypesComponent },
  { path: 'Countries', component: CountriesComponent },
  { path: 'Add-countries', component: AddCountriesComponent },
  { path: 'tournaments', component: FetchtournamentComponent },
  { path: 'Add-bettypes', component: AddBettypesComponent },
  { path: 'Add-Tournament', component: AddTournamentComponent },
  { path: 'Sports', component: SportsComponent },
  { path: 'events', component: FetchEventsComponent },
  { path: 'markets', component: MarketsComponent },
  { path: 'Add-Sport', component: AddSportComponent },
  { path: 'Add-events', component: AddEventsComponent },
  { path: 'bettype/edit/:id', component: AddBettypesComponent }, 
  { path: 'sport/edit/:id', component: AddSportComponent }, 
  { path: 'sport/edit/:id', component: AddSportComponent }, 
  { path: 'tournament/edit/:id', component: AddTournamentComponent }, 
  { path: 'events/edit/:id', component: AddEventsComponent }, 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
