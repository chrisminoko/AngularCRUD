import { Injectable, Inject } from '@angular/core';  
import { HttpClient,HttpResponse} from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class MarketsService {
  private rootUrl="http://localhost:5000/";
  constructor(private _http:HttpClient) { }
  getMarket(){
    return this._http.get(this.rootUrl+'api/Markets')
    
  }


  getMarketById(id:number){
   return this._http.get(this.rootUrl+'api/Markets/Search?id='+id)
  }

  addMarket(BetTypes){
   return this._http.post(this.rootUrl+'api/Markets',BetTypes)
  }

  deleteMarket(id:number){
   return this._http.delete(this.rootUrl+'api/Markets/'+id)
  }
  updateMarket(BetTypes){
   return this._http.put(this.rootUrl+'api/Markets/',BetTypes)
  }
}
