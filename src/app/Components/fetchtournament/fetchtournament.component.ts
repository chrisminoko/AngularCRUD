import { Component, OnInit } from '@angular/core';
import {tournament} from '../../Models/tournament';
import {TournamentService} from '../../Services/tournament.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-fetchtournament',
  templateUrl: './fetchtournament.component.html',
  styleUrls: ['./fetchtournament.component.css']
})
export class FetchtournamentComponent implements OnInit {

  constructor(private _router:Router, private _tournamentservice:TournamentService) { }
  public tournament:tournament[];
  ngOnInit(): void {
    this.getTournament();
  }

  
  getTournament(){
    this._tournamentservice.getTournament().subscribe((data:any)=>{
      this.tournament=data;
    })
  }

  delete(groupmeetingID:number){
    var ans= confirm("Do you want to delete Tournament with Id: "+groupmeetingID)
      if(ans){
        this._tournamentservice.deleteTournament(groupmeetingID).subscribe((data:any)=>{
          this.getTournament();
        },error=> console.error(error))
      }
  }

}
