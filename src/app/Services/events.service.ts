import { Injectable, Inject } from '@angular/core';  
import { HttpClient,HttpResponse} from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private rootUrl="http://localhost:5000/";
  constructor(private _http:HttpClient) { }

  getEvents(){
    return this._http.get(this.rootUrl+'api/Events/GetAll')
    
  }

  getEventsById(id:number){
   return this._http.get(this.rootUrl+'api/Events/Search?id='+id)
  }

  addEvents(BetTypes){
   return this._http.post(this.rootUrl+'api/Events',BetTypes)
  }

  deleteEvents(id:number){
   return this._http.delete(this.rootUrl+'api/Events/'+id)
  }
  updateEvents(BetTypes){
   return this._http.put(this.rootUrl+'api/Events/',BetTypes)
  }
}
