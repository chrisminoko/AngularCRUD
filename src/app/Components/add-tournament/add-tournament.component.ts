import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  
import { Router, ActivatedRoute } from '@angular/router'; 
import {tournament} from '../../Models/tournament';
import {TournamentService} from '../../Services/tournament.service';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent implements OnInit {


  groupmeetingForm :FormGroup;
  title: string="Create";
  groupmeetingid:number;
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,private _router:Router, private _tournamentservice:TournamentService) {
    if(this._avRoute.snapshot.params["id"]){
      this.groupmeetingid=this._avRoute.snapshot.params["id"];
    }
    this.groupmeetingForm=this._fb.group({
      tournamentId:0,
      name:['', [Validators.required]],
    })
   }

   ngOnInit(): void {
    if(this.groupmeetingid>0){
      this.title='Edit';
      this._tournamentservice.getTournamentById(this.groupmeetingid)
          .subscribe(resp=>this.groupmeetingForm.setValue(resp))

    }

  }

  
  save(){
    if(!this.groupmeetingForm.valid){
      return;
    }
    if(this.title=="Create"){
      this._tournamentservice.addTournament(this.groupmeetingForm.value)
          .subscribe((data:any)=>{
            this._router.navigateByUrl('/tournaments')
            console.log('Navigate hit')
          })
    }else if (this.title=="Edit"){
      this._tournamentservice.updateTournament(this.groupmeetingForm.value)
      .subscribe((data:any)=>{
        this._router.navigateByUrl('/tournaments')
        console.log('Edited'+data);
      })
    }
  }
  

  cancel() {  
    this._router.navigateByUrl('/tournaments')
  } 
  get name() { return this.groupmeetingForm.get('name'); }  
}
