import { Component, OnInit } from '@angular/core';
import { VehiculosService } from './asignacion.service';
import {  trigger,  state,  style,  animate, query, stagger,  transition } from '@angular/animations';
import { ModalService } from './modal.service';
import { asignar } from './asignar';

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
    public divsstatus : boolean;
    public divOpen : string;
    public openVehiculoId : string;
    public conductores;
    public asignado2 ;






  constructor(
    private _contactSevice: VehiculosService,
    private modalService: ModalService
  ) {

    
    this.divsstatus = false;
    this.divOpen = 'out';
    this.openVehiculoId = '';
    this.asignar7 = new asignar("","","") ;
    this.asignado2 ;
    

   }

  

   colapseView():void {
       
        this.divOpen = this.divOpen === 'out' ? 'in' : 'out'; 
           
    }


    openModal(id: string, vehiculoId ) {
        this.modalService.open(id);
        this.openVehiculoId = vehiculoId;
        

        this._contactSevice.getConductores().then((value) => {
        this.conductores =  this._contactSevice.listConductores;
        console.log(this.conductores);

        });
    }
 
    closeModal(id: string) {
        this.modalService.close(id);
    }

     asignarConductor(nombre,vehiid,condid){
       this.asignar7 = new asignar(nombre,vehiid,condid) ;
       console.log(this.asignar7);
      this._contactSevice.getAsignacion(this.asignar7).then((value) => {
     // this.asignado2 =  this._contactSevice.listAsignar;
      //console.log(this.asignado2);  
      alert("se creo el conductor con id: "+this.asignado2);
      //window.location.reload(); 
       });


    }




  ngOnInit() {
      
    this._contactSevice.getContacts().then((value) => {
    this.vehiculos =  this._contactSevice.listVehiculos;
    console.log(this.vehiculos);

    });
    
  	
  }

}
