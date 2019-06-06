import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Module1Component } from './module1/module1.component';
import { PersonService } from '../person.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Module1Component],
  imports: [
    CommonModule,
    Module1RoutingModule,
    FormsModule
  ],
  providers: [ PersonService ]
})
export class Module1Module { }