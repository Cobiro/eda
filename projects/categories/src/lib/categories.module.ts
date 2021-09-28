import {NgModule} from '@angular/core';
import {CategoriesComponent} from './categories.component';
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {MatListModule} from "@angular/material/list";
import {ReactiveFormsModule} from "@angular/forms";
import {MatBadgeModule} from "@angular/material/badge";

@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule, BrowserModule, MatListModule, ReactiveFormsModule, MatBadgeModule
  ],
  exports: [
    CategoriesComponent
  ]
})
export class CategoriesModule { }
