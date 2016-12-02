import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';

import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    AdminRoutingModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
