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
    public contacts;




  constructor(
    private _contactSevice: ContactService) {
  	this.nombre = "hola mundo";

  	

   }

  ngOnInit() {
      
    this._contactSevice.getContacts().then((value) => {

      this.contacts =  Array.of(this._contactSevice.listConductores);

      
      


        console.log(this.contacts); 
      });
    
  	
  }

}
