import {NgModule} from '@angular/core';
import {SettingsComponent} from './settings.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {CommonModule} from "@angular/common";
import {SettingsService} from "./settings.service";


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
  ],
  providers: [
    SettingsService
  ]
})
export class SettingsModule { }
