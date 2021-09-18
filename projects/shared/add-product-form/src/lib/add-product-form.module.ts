import { NgModule } from '@angular/core';
import { AddProductFormComponent } from './add-product-form.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    AddProductFormComponent
  ],
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    AddProductFormComponent
  ]
})
export class AddProductFormModule { }
