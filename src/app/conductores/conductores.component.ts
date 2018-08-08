import { Component, OnInit } from '@angular/core';
import { ConductoresService } from './conductores.service';
import { conductor } from './conductor';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.css'],
  providers: [ConductoresService]
})
export class ConductoresComponent implements OnInit {

		public nombre:string ;
    public contacts;
    public conductor: conductor;
    public addconductor;




  constructor(
    private _contactSevice: ConductoresService
  ) {
  	this.nombre = "hola mundo";
    this.conductor = new conductor("","","","","","","",true) 
   }

  insertConductor(){

    // this._contactSevice.createConductor(this.conductor).then((value) => {
    // this.addconductor =  this._contactSevice.addconductor1;
    // console.log(this.addconductor);

    });


  }

  ngOnInit() {
      
    this._contactSevice.getContacts().then((value) => {
    this.contacts =  this._contactSevice.listConductores;
    console.log(this.contacts);

    });
    
  	
  }

}
