import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuthGuard } from '../auth-guard.service';

const adminRoutes: Routes = [
  { 
    path: '', 
    component: AdminComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(
      adminRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class AdminRoutingModule {}
