import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterventionComponent } from './shared-module/components/intervention/intervention.component';
import { LoginComponent } from './shared-module/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'intervention',
    component: InterventionComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
