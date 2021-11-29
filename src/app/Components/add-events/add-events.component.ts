import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  
import { Router, ActivatedRoute } from '@angular/router'; 
import {event} from '../../Models/events';
import {EventsService} from '../../Services/events.service';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

  groupmeetingForm2 :FormGroup;
  title: string="Create";
  groupmeetingid:number;
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,private _router:Router, private _eventService:EventsService) {
    if(this._avRoute.snapshot.params["id"]){
      this.groupmeetingid=this._avRoute.snapshot.params["id"];
    }
    this.groupmeetingForm2=this._fb.group({
      eventId:0,
      tournamentID:0,
      eventName:['', [Validators.required]],
      eventDate:['', [Validators.required]],
    })
   }
  ngOnInit(): void {
  }

  save(){
    if(!this.groupmeetingForm2.valid){
      return;
    }
    if(this.title="Create"){
      this._eventService.addEvents(this.groupmeetingForm2.value)
          .subscribe((data:any)=>{
            this._router.navigateByUrl('/events')
            console.log('Navigate hit')
          })
    }else if (this.title=="Edit"){
      this._eventService.updateEvents(this.groupmeetingForm2.value)
      .subscribe((data:any)=>{
        this._router.navigateByUrl('/events')
        console.log('Edited'+data);
      })
    }
  }
  

  cancel() {  
    this._router.navigateByUrl('/events')
  } 
  get tournamentID() { return this.groupmeetingForm2.get('tournamentID'); } 
  get eventName() { return this.groupmeetingForm2.get('eventName'); } 
  get eventDate() { return this.groupmeetingForm2.get('eventDate'); } 

}
