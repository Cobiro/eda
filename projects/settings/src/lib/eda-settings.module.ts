import {NgModule} from '@angular/core';
import {SettingsComponent} from './settings.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {CommonModule} from "@angular/common";
import {EDASettingsComponent} from "./eda-settings.component";
import {SettingsService} from "./settings.service";


@NgModule({
  declarations: [
    EDASettingsComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule
  ],
  exports: [
    EDASettingsComponent
  ],
  providers: [
    SettingsService
  ]
})
export class EDASettingsModule { }
