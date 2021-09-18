import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxComponent } from './ngrx/ngrx.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {SettingsModule} from "../../../projects/settings/src/lib/settings.module";
import {NgrxProductsModule} from "../../../projects/ngrx-products/src/lib/ngrx-products.module";
import {NgrxCategoriesModule} from "../../../projects/ngrx-categories/src/lib/ngrx-categories.module";
import {MatCardModule} from "@angular/material/card";
import {NgrxNotificationsModule} from "../../../projects/ngrx-notifications/src/lib/ngrx-notifications.module";



@NgModule({
  declarations: [
    NgrxComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    NgrxNotificationsModule,
    SettingsModule,
    NgrxProductsModule,
    NgrxCategoriesModule,
    SettingsModule
  ]
})
export class NgrxModule { }
