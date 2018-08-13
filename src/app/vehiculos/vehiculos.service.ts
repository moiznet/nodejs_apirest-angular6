import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class VehiculosService {


    private contactsUrl = 'https://damp-oasis-44947.herokuapp.com/api/vehiculos';
    public listVehiculos = {};
    public addvehiculo1 = {};
    public deletevehiculo = {};
    
    constructor (private http: Http) {}

    // get("/api/vehiculos")
    getContacts() {
      return this.http.get(this.contactsUrl)
                 .toPromise()
                 .then((response) => {console.log(response); this.listVehiculos = JSON.parse(response["_body"]) ;   })
                 .catch(this.handleError);
    }
    
    // post("/api/vehiculos")
    createVehiculo(newVehiculo) {
      return this.http.post(this.contactsUrl, newVehiculo)
                 .toPromise()
                 .then((response) => {console.log(response); this.addvehiculo1 = JSON.parse(response["_body"]) ; }  )
                 .catch(this.handleError);
    }

    // post("/api/vehiculos")
    deleteVehiculo(idVehiculo) {
      return this.http.delete(this.contactsUrl+'?_id='+idVehiculo, )
                 .toPromise()
                 .then((response) => {console.log(response); this.deletevehiculo = JSON.parse(response["_body"]) ; }  )
                 .catch(this.handleError);

    }  


    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}