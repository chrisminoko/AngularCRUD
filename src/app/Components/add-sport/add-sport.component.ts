import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  
import { Router, ActivatedRoute } from '@angular/router'; 
import {Sports} from '../../Models/sport';
import {SportService} from '../../Services/sport.service';

@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.component.html',
  styleUrls: ['./add-sport.component.css']
})
export class AddSportComponent implements OnInit {

  groupmeetingForm :FormGroup;
  title: string="Create";
  groupmeetingid:number;
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,private _router:Router, private _sportservice:SportService) {
    if(this._avRoute.snapshot.params["id"]){
      this.groupmeetingid=this._avRoute.snapshot.params["id"];
    }
    this.groupmeetingForm=this._fb.group({
      sportId:0,
      name:['', [Validators.required]],
      imageUrl:['', [Validators.required]],
    })
   }

  ngOnInit(): void {
    if(this.groupmeetingid>0){
      this.title='Edit';
      this._sportservice.getSportsById(this.groupmeetingid)
          .subscribe(resp=>this.groupmeetingForm.setValue(resp))

    }

  }

  save(){
    if(!this.groupmeetingForm.valid){
      return;
    }
    if(this.title="Create"){
      this._sportservice.addSports(this.groupmeetingForm.value)
          .subscribe((data:any)=>{
            this._router.navigateByUrl('/Sports')
            console.log('Navigate hit')
          })
    }else if (this.title=="Edit"){
      this._sportservice.updateSport(this.groupmeetingForm.value)
      .subscribe((data:any)=>{
        this._router.navigateByUrl('/Sports')
        console.log('Edited'+data);
      })
    }
  }
  

  cancel() {  
    this._router.navigateByUrl('/Sports')
  } 
  get name() { return this.groupmeetingForm.get('name'); } 
  get imageUrl() { return this.groupmeetingForm.get('imageUrl'); } 

}
