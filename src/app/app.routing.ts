import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

//import componets
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ConductoresComponent } from './conductores/conductores.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoggerComponent } from './logger/logger.component';
import { AsignacionComponent } from './asignacion/asignacion.component';

const appRoutes : Routes = [

	{path: '', component: AsignacionComponent },
	{path: 'asignacion', component: AsignacionComponent },
	{path: 'conductores', component: ConductoresComponent },
	{path: 'vehiculos', component: VehiculosComponent },
	{path: 'usuarios', component: UsuariosComponent },
	{path: 'logger', component: LoggerComponent },
	{path: '**', component: LoggerComponent }

];

export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
