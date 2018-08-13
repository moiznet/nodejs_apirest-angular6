import { Component, OnInit } from '@angular/core';
import { VehiculosService } from './vehiculos.service';
import { vehiculo,origen, destino, conductor  } from './vehiculo';
import {  trigger,  state,  style,  animate, query, stagger,  transition } from '@angular/animations';



 @Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.less'],
  providers: [VehiculosService],
  animations: [
    trigger('openClose', [
      state('in', style({
        height: '*'
      })),
      state('out',   style({
          height: '0px'
      })),
      transition('in => out', animate('500ms ease-out')),
      transition('out => in', animate('500ms ease-in'))
    ]),
    trigger('listStagger',[

        transition('* <=> *',[
          query(':enter',[

            style({opacity:0, transform: 'translateY(-15px)'}),
            stagger('50ms', animate('550ms ease-out',
              style({ opacity: 1, transform: 'translateY(0px)'})))
            ], { optional : true }),
          query(':leave', animate('50ms', style({ opacity:0 })), { optional : true })
          ])
      ])
  ]
})
export class VehiculosComponent implements OnInit {

		public nombre:string ;
    public vehiculos;
    public vehiculo7: vehiculo;
    public addvehiculo;
    public deletevehiculo;
    public divsstatus : boolean;
    public divOpen : string;
    public vehiculoId : string;
    public origen : origen;
    public destino : destino;
    public conductor : conductor;




  constructor(
    private _contactSevice: VehiculosService
  ) {
  	this.nombre = "hola mundo";
    this.origen = new origen("",  0,0) ;
    this.destino = new destino("", 0 ,0) ;
    this.vehiculo7 = new vehiculo("", "" ,"","","", this.origen , this.destino , this.conductor) ;
    
    this.divsstatus = false;
    this.divOpen = 'out';
    this.vehiculoId = '';
   }

  insertVehiculo(){

    this._contactSevice.createVehiculo(this.vehiculo7).then((value) => {
    this.addvehiculo =  this._contactSevice.addvehiculo1;
    console.log(this.addvehiculo);  
    alert("se creo el conductor con id: "+this.addvehiculo.ops[0]._id);
    this.ngOnInit();
     });


  }

  eraseVehiculo(id){

    this._contactSevice.deleteVehiculo(id).then((value) => {
    this.deletevehiculo =  this._contactSevice.deletevehiculo;
    console.log(this.deletevehiculo);  
    alert("se borro("+this.deletevehiculo.n+") el conductor con id: "+id );
    this.ngOnInit();
     });



  }
   colapseView():void {
       
        this.divOpen = this.divOpen === 'out' ? 'in' : 'out'; 
           
    }




  ngOnInit() {
      
    this._contactSevice.getContacts().then((value) => {
    this.vehiculos =  this._contactSevice.listVehiculos;
    console.log(this.vehiculos);

    });
    
  	
  }

}
