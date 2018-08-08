import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ConductoresService {
    private contactsUrl = 'https://damp-oasis-44947.herokuapp.com/api/conductores';
    public listConductores = {};
    public addconductor1 = {};
    
    constructor (private http: Http) {}

    // get("/api/conductores")
    getContacts() {
      return this.http.get(this.contactsUrl)
                 .toPromise()
                 .then((response) => {console.log(response); this.listConductores = JSON.parse(response["_body"]) ;   })
                 .catch(this.handleError);
    }
    
 


    // // put("/api/conductores/:id")
    // updateContact(putContact: Conductor): Promise<void | Conductor> {
    //   var putUrl = this.contactsUrl + '/' + putContact._id;
    //   return this.http.put(putUrl, putContact)
    //              .toPromise()
    //              .then(response => response.json() as Conductor)
    //              .catch(this.handleError);
    // }









    // // delete("/api/contacts/:id")
    // deleteContact(delContactId: String) {
    //   return this.http.delete(this.contactsUrl + '/' + delContactId)
    //              .toPromise()
    //              .then(response => response.json() as String)
    //              .catch(this.handleError);
    // }

    // // put("/api/contacts/:id")
    // updateContact(putContact: Conductor): Promise<void | Conductor> {
    //   var putUrl = this.contactsUrl + '/' + putContact._id;
    //   return this.http.put(putUrl, putContact)
    //              .toPromise()
    //              .then(response => response.json() as Conductor)
    //              .catch(this.handleError);
    // }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}