import { Component, OnInit } from '@angular/core';
import {Market} from '../../Models/markets';
import {MarketsService} from '../../Services/markets.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {

  constructor(private _router:Router, private _marketeservice:MarketsService) { }
  public markets:Market[];
  ngOnInit(): void {
    this.getmarkets();
  }

  getmarkets(){
    this._marketeservice.getMarket().subscribe((data:any)=>{
      this.markets=data;
    })
  }

  delete(groupmeetingID:number){
    var ans= confirm("Do you want to delete Market Type with Id: "+groupmeetingID)
      if(ans){
        this._marketeservice.deleteMarket(groupmeetingID).subscribe((data:any)=>{
          this.getmarkets();
        },error=> console.error(error))
      }
  }


}
