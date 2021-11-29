import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  
import { Router, ActivatedRoute } from '@angular/router'; 
import {countries} from '../../Models/country';
import {CountryService} from '../../Services/country.service';
@Component({
  selector: 'app-AddCountries',
  templateUrl: './AddCountries.component.html',
  styleUrls: ['./AddCountries.component.css']
})
export class AddCountriesComponent implements OnInit {


  groupmeetingForm2 :FormGroup;
  title: string="Create";
  groupmeetingid:number;
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,private _router:Router, private _countryService:CountryService) {
    if(this._avRoute.snapshot.params["id"]){
      this.groupmeetingid=this._avRoute.snapshot.params["id"];
    }
    this.groupmeetingForm2=this._fb.group({
      countryid:0,
      name:['', [Validators.required]],
      flagUrl:['', [Validators.required]]
    })
   }

  ngOnInit() {
    if(this.groupmeetingid>0){
      this.title='Edit';
      this._countryService.getCountryById(this.groupmeetingid)
          .subscribe(resp=>this.groupmeetingForm2.setValue(resp))

    }
  }

  save(){
    if(!this.groupmeetingForm2.valid){
      return;
    }
    if(this.title="Create"){
      this._countryService.addCountry(this.groupmeetingForm2.value)
          .subscribe((data:any)=>{
            this._router.navigateByUrl('/countries')
            console.log('Navigate hit')
          })
    }else if (this.title=="Edit"){
      this._countryService.updateCountry(this.groupmeetingForm2.value)
      .subscribe((data:any)=>{
        this._router.navigateByUrl('/countries')
        console.log('Edited'+data);
      })
    }
  }
  

  cancel() {  
    this._router.navigateByUrl('/countries')
  } 
  get name() { return this.groupmeetingForm2.get('name'); } 
  get flagUrl() { return this.groupmeetingForm2.get('flagUrl'); } 

}
