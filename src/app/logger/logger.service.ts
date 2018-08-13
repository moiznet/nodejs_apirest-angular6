import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class LoggersService {
    private contactsUrl = 'https://damp-oasis-44947.herokuapp.com/api/logger';
    public listLoggers = {};
    
    constructor (private http: Http) {}

    // get("/api/logger")
    getContacts() {
      return this.http.get(this.contactsUrl)
                 .toPromise()
                 .then((response) => {console.log(response); this.listLoggers = JSON.parse(response["_body"]) ;   })
                 .catch(this.handleError);
    }
    

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}