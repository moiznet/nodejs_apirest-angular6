import { Component, OnInit } from '@angular/core';
import { VehiculosService } from './asignacion.service';
import {  trigger,  state,  style,  animate, query, stagger,  transition } from '@angular/animations';
import { ModalService } from './modal.service';
import { asignar , liberar} from './asignar';

 @Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.less'],
  providers: [VehiculosService],
  animations: [
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
export class AsignacionComponent implements OnInit {

	
    public vehiculos;
   

    public asignar7: asignar;
    public liberar8: liberar;
    public divsstatus : boolean;
    public divOpen : string;
    public openVehiculoId : string;
    public openConductorId : string;
    public conductores;
    public asignado2 ;






  constructor(
    private _contactSevice: VehiculosService,
    private modalService: ModalService
  ) {

    
    this.divsstatus = false;
    this.divOpen = 'out';
    this.openVehiculoId = '';
    this.openConductorId = '';
    this.asignar7 = new asignar("","","") ;
    this.liberar8 = new liberar("","") ;

    
    this.asignado2 ;
    

   }

  

   colapseView():void {
       
        this.divOpen = this.divOpen === 'out' ? 'in' : 'out'; 
           
    }


    openModal(id: string, vehiculoId , conductorAsignadoId ) {

      console.log(conductorAsignadoId);
        this.modalService.open(id);
        this.openVehiculoId = vehiculoId;
        this.openConductorId = conductorAsignadoId;

        conductorAsignadoId ? console.log("condicion 1"+conductorAsignadoId) : console.log("condicion 2"+conductorAsignadoId);


       console.log(this.openConductorId);
        

        this._contactSevice.getConductores().then((value) => {
        this.conductores =  this._contactSevice.listConductores;
        console.log(this.conductores);

        });
    }
 
    closeModal(id: string) {
        this.modalService.close(id);
    }

    liberarConductor(openVehiculoId, conductorarrid) {
        console.log(openVehiculoId+' / '+conductorarrid);
        this.liberar8 = new liberar(openVehiculoId,conductorarrid) ;
        console.log(this.liberar8);
        this._contactSevice.getLiberar(this.liberar8).then((value) => { 
        alert("se asigno el conductor: ");
        
        this._contactSevice.getConductores().then((value) => {   this.conductores =  this._contactSevice.listConductores;    console.log(this.conductores); });

         });
    }

     asignarConductor(nombre,vehiid,condid){
       this.asignar7 = new asignar(nombre,vehiid,condid) ;
       
       console.log(this.asignar7);
      this._contactSevice.getAsignacion(this.asignar7).then((value) => { 
      alert("se asigno el conductor: ");
      this._contactSevice.getConductores().then((value) => {   this.conductores =  this._contactSevice.listConductores;    console.log(this.conductores); });

       });


    }




  ngOnInit() {
      
    this._contactSevice.getContacts().then((value) => {
    this.vehiculos =  this._contactSevice.listVehiculos;
    console.log(this.vehiculos);

    });
    
  	
  }

}
