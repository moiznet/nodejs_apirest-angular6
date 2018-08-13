import { Component, OnInit } from '@angular/core';
import { ConductoresService } from './conductores.service';
import { conductor } from './conductor';
import {  trigger,  state,  style,  animate, query, stagger,  transition } from '@angular/animations';


@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.less'],
  providers: [ConductoresService],
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
export class ConductoresComponent implements OnInit {

		public nombre:string ;
    public conductores;
    public conductor: conductor;
    public addconductor;
    public deleteconductor;
    public divsstatus : boolean;
    public divOpen : string;
    public conductorId : string;




  constructor(
    private _contactSevice: ConductoresService
  ) {
  	this.nombre = "hola mundo";
    this.conductor = new conductor("","","","","","","",true) ;
    this.divsstatus = false;
    this.divOpen = 'out';
    this.conductorId = '';
   }

  insertConductor(){

    this._contactSevice.createConductor(this.conductor).then((value) => {
    this.addconductor =  this._contactSevice.addconductor1;
    console.log(this.addconductor);  
    alert("se creo el conductor con id: "+this.addconductor.ops[0]._id);
    this.ngOnInit(); 

     });


  }

  eraseConductor(id){

    this._contactSevice.deleteConductor(id).then((value) => {
    this.deleteconductor =  this._contactSevice.deleteconductor;
    console.log(this.deleteconductor);  
    alert("se borro("+this.deleteconductor.n+") el conductor con id: "+id );
    this.ngOnInit();
     });



  }
   colapseView():void {
        
        this.divOpen = this.divOpen === 'out' ? 'in' : 'out';      
    }




  ngOnInit() {
      
    this._contactSevice.getContacts().then((value) => {
    this.conductores =  this._contactSevice.listConductores;
    console.log(this.conductores);

    });
    
  	
  }

}
