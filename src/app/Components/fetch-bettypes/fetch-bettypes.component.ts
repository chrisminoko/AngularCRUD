import { Component, OnInit } from '@angular/core';
import {bettypes} from '../../Models/bettype';
import {BettypeService} from '../../Services/bettype.service'
import { Router, ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-fetch-bettypes',
  templateUrl: './fetch-bettypes.component.html',
  styleUrls: ['./fetch-bettypes.component.css']
})
export class FetchBettypesComponent implements OnInit {

  constructor(private _router:Router, private _bettypeservice:BettypeService) { }
  public bettype:bettypes[];

  ngOnInit(): void {
    this.getbettype();
  }

  getbettype(){
    this._bettypeservice.getBettype().subscribe((data:any)=>{
      this.bettype=data;
    })
  }

  delete(groupmeetingID:number){
    var ans= confirm("Do you want to delete BetType with Id: "+groupmeetingID)
      if(ans){
        this._bettypeservice.deleteBettype(groupmeetingID).subscribe((data:any)=>{
          this. getbettype();
        },error=> console.error(error))
      }
  }

}
