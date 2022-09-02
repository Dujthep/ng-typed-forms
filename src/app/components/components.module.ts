import { ComponentsRoutingModule } from './components-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
