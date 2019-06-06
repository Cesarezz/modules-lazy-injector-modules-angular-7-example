import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Module2Component } from './module2/module2.component';
import { PersonService } from '../person.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Module2Component],
  imports: [
    CommonModule,
    Module2RoutingModule,
    FormsModule
  ],
  providers: [ PersonService ]
})
export class Module2Module { }
