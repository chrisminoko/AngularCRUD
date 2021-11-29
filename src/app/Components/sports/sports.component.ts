import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import {Sports} from '../../Models/sport';
import {SportService} from '../../Services/sport.service'
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private _router:Router, private _sportservice:SportService) { }
  p: number = 1;
 sports:Sports[];
  ngOnInit(): void {
    this.getsports();
  }

  getsports(){
    this._sportservice.getSports().subscribe((data:any)=>{
      this.sports=data;
    })
  }

  delete(groupmeetingID:number){
    var ans= confirm("Do you want to delete Sport with Id: "+groupmeetingID)
      if(ans){
        this._sportservice.deleteSport(groupmeetingID).subscribe((data:any)=>{
          this. getsports();
        },error=> console.error(error))
      }
  }


}
