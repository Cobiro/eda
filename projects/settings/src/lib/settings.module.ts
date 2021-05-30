import {NgModule} from '@angular/core';
import {SettingsComponent} from './settings.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule
  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
