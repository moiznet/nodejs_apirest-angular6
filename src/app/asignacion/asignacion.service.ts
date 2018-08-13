import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class VehiculosService {


    private contactsUrl = 'https://damp-oasis-44947.herokuapp.com/api/vehiculos';
    public listVehiculos = {};

    private conductoresUrl = 'https://damp-oasis-44947.herokuapp.com/api/conductores';
    public listConductores ={};

    private asignarUrl = 'https://damp-oasis-44947.herokuapp.com/api/asignar';
    private liberarUrl = 'https://damp-oasis-44947.herokuapp.com/api/liberar';
    public listAsignar ={};

    public newasignar;

    
    constructor (private http: Http) {}

    // get("/api/vehiculos")
    getContacts() {
      return this.http.get(this.contactsUrl)
                 .toPromise()
                 .then((response) => {console.log(response); this.listVehiculos = JSON.parse(response["_body"]) ;   })
                 .catch(this.handleError);
    }

    // get("/api/conductores")
    getConductores() {
      return this.http.get(this.conductoresUrl)
                 .toPromise()
                 .then((response) => {console.log(response); this.listConductores = JSON.parse(response["_body"]) ;   })
                 .catch(this.handleError);
    }


        // get("/api/conductores")
    getAsignacion(newasignar) {
      return this.http.put(this.asignarUrl, newasignar)
                 .toPromise()
                 .then((response) => {console.log(response);    })
                 .catch(this.handleError);
    }


    getLiberar(newliberar) {
      return this.http.put(this.liberarUrl, newliberar)
                 .toPromise()
                 .then((response) => {console.log(response);    })
                 .catch(this.handleError);
    }


    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}