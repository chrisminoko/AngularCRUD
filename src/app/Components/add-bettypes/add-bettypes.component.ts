import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  
import { Router, ActivatedRoute } from '@angular/router'; 
import {bettypes} from '../../Models/bettype';
import {BettypeService} from '../../Services/bettype.service'
@Component({
  selector: 'app-add-bettypes',
  templateUrl: './add-bettypes.component.html',
  styleUrls: ['./add-bettypes.component.css']
})
export class AddBettypesComponent implements OnInit {
  groupmeetingForm :FormGroup;
  title: string="Create";
  groupmeetingid:number;
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,private _router:Router, private _bettypeservice:BettypeService) {
    if(this._avRoute.snapshot.params["id"]){
      this.groupmeetingid=this._avRoute.snapshot.params["id"];
    }
    this.groupmeetingForm=this._fb.group({
      betypeid:0,
      bettype:['', [Validators.required]]
    })
   }

  ngOnInit(): void {
    if(this.groupmeetingid>0){
      this.title='Edit';
      this._bettypeservice.getBettypeById(this.groupmeetingid)
          .subscribe(resp=>this.groupmeetingForm.setValue(resp))

    }

  }
  save(){
    if(!this.groupmeetingForm.valid){
      return;
    }
    if(this.title=="Create"){
      this._bettypeservice.addBettype(this.groupmeetingForm.value)
          .subscribe((data:any)=>{
            this._router.navigate(['/bettypes'])
            console.log('Navigate hit')
          })
    }else if (this.title=="Edit"){
      this._bettypeservice.updateBettype(this.groupmeetingForm.value)
      .subscribe((data:any)=>{
        this._router.navigate(['/bettypes'])
        console.log('Edited'+data);
      })
    }
  }

  cancel() {  
    this._router.navigate(['/bettypes']);  
  } 
  get bettype() { return this.groupmeetingForm.get('bettype'); }  
}
