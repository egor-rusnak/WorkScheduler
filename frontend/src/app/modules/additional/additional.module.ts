import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AdditionalRoutingModule } from './additional-routing.module';
import { AdditionalComponent } from './additional.component';
import { UserEditListComponent } from './user-edit-list/user-edit-list.component';
import { ServiceEditListComponent } from './service-edit-list/service-edit-list.component';

@NgModule({
	declarations: [
		AdditionalComponent,
		UserEditListComponent,
		ServiceEditListComponent,
	],
	imports: [
		CommonModule,
		AdditionalRoutingModule,
		MatButtonModule,
		MatInputModule,
	],
})
export class AdditionalModule {}
