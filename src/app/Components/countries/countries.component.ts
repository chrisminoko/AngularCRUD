import { Component, OnInit } from '@angular/core';
import {countries} from '../../Models/country';
import {CountryService} from '../../Services/country.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private _router:Router, private _countryService:CountryService) { }
  public country:countries[];
  ngOnInit(): void {
    this.getCountry();
  }
  getCountry(){
    this._countryService.getCountry().subscribe((data:any)=>{
      this.country=data;
    })
  }

  delete(groupmeetingID:number){
    var ans= confirm("Do you want to delete Country with Id: "+groupmeetingID)
      if(ans){
        this._countryService.deleteCountry(groupmeetingID).subscribe((data:any)=>{
          this.getCountry();
        },error=> console.error(error))
      }
  }
}
