import { Component, OnInit } from '@angular/core';
import { ContactService } from './conductores.service';
import { Contact } from './conductor';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.css'],
  providers: [ContactService]
})
export class ConductoresComponent implements OnInit {

		public nombre:string ;
    public contacts: Contact[];
  //selectedContact: Contact;



  constructor(private contactService: ContactService) {
  	this.nombre = "hola mundo";
  	

   }

  ngOnInit() {
  //	console.log(this.nombre);

    this.contactService
      .getContacts()
      .then((contacts: Contact[]) => {
        this.contacts = contacts.map((contact) => {
            return contact;
        });
      });

  	
  }

}
