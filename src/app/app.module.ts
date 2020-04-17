import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, VehiculoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
