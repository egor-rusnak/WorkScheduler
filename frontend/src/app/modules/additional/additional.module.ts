import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionalRoutingModule } from './additional-routing.module';
import { AdditionalComponent } from './additional.component';
import { UserEditListComponent } from './user-edit-list/user-edit-list.component';


@NgModule({
  declarations: [
    AdditionalComponent,
    UserEditListComponent
  ],
  imports: [
    CommonModule,
    AdditionalRoutingModule
  ]
})
export class AdditionalModule { }
