import { Component, OnInit } from '@angular/core';
import { LoggersService } from './logger.service';

import {  trigger,  state,  style,  animate, query, stagger,  transition } from '@angular/animations';



@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.less'],
  providers: [LoggersService],
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

export class LoggerComponent implements OnInit {
    public loggers;
    public divsstatus : boolean;
    public divOpen : string;





  constructor(
    private _contactSevice: LoggersService
  ) {

    this.divsstatus = false;
    this.divOpen = 'out';
   }

  

   colapseView():void {
        
        this.divOpen = this.divOpen === 'out' ? 'in' : 'out';      
    }



  ngOnInit() {
      
    this._contactSevice.getContacts().then((value) => {
    this.loggers =  this._contactSevice.listLoggers;
    console.log(this.loggers);

    });
    
    
  }
}
