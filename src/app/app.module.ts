import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing,appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { ConductoresComponent } from './conductores/conductores.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoggerComponent } from './logger/logger.component';
import { AsignacionComponent } from './asignacion/asignacion.component';
import { ModalComponent } from './asignacion/modal.component';
import { ModalService } from './asignacion/modal.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ConductoresComponent,
    VehiculosComponent,
    UsuariosComponent,
    LoggerComponent,
    AsignacionComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserModule, 
    BrowserAnimationsModule
  ],
  providers: [appRoutingProviders,ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
