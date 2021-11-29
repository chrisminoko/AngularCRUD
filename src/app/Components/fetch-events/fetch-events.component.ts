import { Component, OnInit } from '@angular/core';
import {event} from '../../Models/events';
import {EventsService} from '../../Services/events.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-fetch-events',
  templateUrl: './fetch-events.component.html',
  styleUrls: ['./fetch-events.component.css']
})
export class FetchEventsComponent implements OnInit {
  constructor(private _router:Router, private _tournamentService:EventsService) { }
  public events:event[];

  ngOnInit(): void {
   this.getEvents();
  }
  getEvents(){
    this._tournamentService.getEvents().subscribe((data:any)=>{
      this.events=data;
    })
  }

  delete(groupmeetingID:number){
    var ans= confirm("Do you want to delete Tournament with Id: "+groupmeetingID)
      if(ans){
        this._tournamentService.deleteEvents(groupmeetingID).subscribe((data:any)=>{
          this.getEvents();
        },error=> console.error(error))
      }
  }
}
