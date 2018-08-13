import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ConductoresService {
    private contactsUrl = 'https://damp-oasis-44947.herokuapp.com/api/conductores';
    public listConductores = {};
    public addconductor1 = {};
    public deleteconductor = {};
    
    constructor (private http: Http) {}

    // get("/api/conductores")
    getContacts() {
      return this.http.get(this.contactsUrl)
                 .toPromise()
                 .then((response) => {console.log(response); this.listConductores = JSON.parse(response["_body"]) ;   })
                 .catch(this.handleError);
    }
    
    // post("/api/conductores")
    createConductor(newConductor) {
      return this.http.post(this.contactsUrl, newConductor)
                 .toPromise()
                 .then((response) => {console.log(response); this.addconductor1 = JSON.parse(response["_body"]) ; }  )
                 .catch(this.handleError);
    }

    // post("/api/conductores")
    deleteConductor(idConductor) {

     
      
      return this.http.delete(this.contactsUrl+'?_id='+idConductor, )
                 .toPromise()
                 .then((response) => {console.log(response); this.deleteconductor = JSON.parse(response["_body"]) ; }  )
                 .catch(this.handleError);

    }  


    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}