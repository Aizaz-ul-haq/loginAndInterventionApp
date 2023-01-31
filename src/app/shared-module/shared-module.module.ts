import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { InterventionComponent } from './components/intervention/intervention.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SHARED_ZORRO_MODULES } from '../shared-zorro/shared-zorro.module';
import { RouterModule } from '@angular/router';
import { InterventionService } from './services/intervention.service';
  import { HttpClientModule } from '@angular/common/http';



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
    HttpClientModule,
    RouterModule
  ],
  providers:[InterventionService],
  exports:[SHARED_ZORRO_MODULES,FormsModule,
    ReactiveFormsModule,RouterModule,LoginComponent,
    InterventionComponent,HttpClientModule]
})
export class SharedModuleModule { }
