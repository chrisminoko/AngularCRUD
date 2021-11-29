import { Injectable, Inject } from '@angular/core';  
import { HttpClient,HttpResponse} from '@angular/common/http';  


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private rootUrl="http://localhost:5000/";
  constructor(private _http:HttpClient) { }
  getCountry(){
    return this._http.get(this.rootUrl+'api/Country/GetAll')
    
  }

  getCountryById(id:number){
   return this._http.get(this.rootUrl+'api/Country/Search?sportid='+id)
  }

  addCountry(BetTypes){
   return this._http.post(this.rootUrl+'api/Country',BetTypes)
  }

  deleteCountry(id:number){
   return this._http.delete(this.rootUrl+'api/Country/'+id)
  }
  updateCountry(BetTypes){
   return this._http.put(this.rootUrl+'api/Country/',BetTypes)
  }

}
