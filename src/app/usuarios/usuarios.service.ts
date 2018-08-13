import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UsuariosService {
    private contactsUrl = 'https://damp-oasis-44947.herokuapp.com/api/usuarios';
    public listUsuarios = {};
    public addusuario1 = {};
    public deleteusuario = {};
    
    constructor (private http: Http) {}

    // get("/api/conductores")
    getContacts() {
      return this.http.get(this.contactsUrl)
                 .toPromise()
                 .then((response) => {console.log(response); this.listUsuarios = JSON.parse(response["_body"]) ;   })
                 .catch(this.handleError);
    }
    
    // post("/api/conductores")
    createUsuario(newUsuario) {
      return this.http.post(this.contactsUrl, newUsuario)
                 .toPromise()
                 .then((response) => {console.log(response); this.addusuario1 = JSON.parse(response["_body"]) ; }  )
                 .catch(this.handleError);
    }

    // post("/api/conductores")
    deleteUsuario(idUsuario) {

     
      
      return this.http.delete(this.contactsUrl+'?_id='+idUsuario, )
                 .toPromise()
                 .then((response) => {console.log(response); this.deleteusuario = JSON.parse(response["_body"]) ; }  )
                 .catch(this.handleError);

    }  


    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}