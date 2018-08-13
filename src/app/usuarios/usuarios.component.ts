import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { usuario } from './usuario';
import {  trigger,  state,  style,  animate, query, stagger,  transition } from '@angular/animations';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.less'],
  providers: [UsuariosService],
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



export class UsuariosComponent implements OnInit {

	public nombre:string ;
    public usuarios;
    public usuario7: usuario;
    public addusuario;
    public deleteusuario;
    public divsstatus : boolean;
    public divOpen : string;
    public usuarioId : string;




  constructor(
    private _contactSevice: UsuariosService
  ) {
  	this.nombre = "hola mundo";
    this.usuario7 = new usuario("","","","","","",0,"","") ;
    this.divsstatus = false;
    this.divOpen = 'out';
    this.usuarioId = '';
   }

  insertUsuario(){

    this._contactSevice.createUsuario(this.usuario7).then((value) => {
    this.addusuario =  this._contactSevice.addusuario1;
    console.log(this.addusuario);  
    alert("se creo el conductor con id: "+this.addusuario.ops[0]._id);
    this.ngOnInit();
     });


  }

  eraseUsuario(id){

    this._contactSevice.deleteUsuario(id).then((value) => {
    this.deleteusuario =  this._contactSevice.deleteusuario;
    console.log(this.deleteusuario);  
    alert("se borro("+this.deleteusuario.n+") el conductor con id: "+id );
    this.ngOnInit();
     });



  }
   colapseView():void {
        
        this.divOpen = this.divOpen === 'out' ? 'in' : 'out';      
    }




  ngOnInit() {
      
    this._contactSevice.getContacts().then((value) => {
    this.usuarios =  this._contactSevice.listUsuarios;
    console.log(this.usuarios);

    });
    
  	
  }

}
