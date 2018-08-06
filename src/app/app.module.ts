import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing,appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ConductoresComponent } from './conductores/conductores.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoggerComponent } from './logger/logger.component';
import { AsignacionComponent } from './asignacion/asignacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactListComponent,
    ConductoresComponent,
    VehiculosComponent,
    UsuariosComponent,
    LoggerComponent,
    AsignacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
