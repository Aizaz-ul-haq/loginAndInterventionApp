import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { InterventionComponent } from './components/intervention/intervention.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SHARED_ZORRO_MODULES } from '../shared-zorro/shared-zorro.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    InterventionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  SHARED_ZORRO_MODULES,
    RouterModule
  ],
  exports:[SHARED_ZORRO_MODULES,FormsModule,
    ReactiveFormsModule,RouterModule,LoginComponent,
    InterventionComponent]
})
export class SharedModuleModule { }
