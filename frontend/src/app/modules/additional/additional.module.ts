import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdditionalRoutingModule } from './additional-routing.module';
import { AdditionalComponent } from './additional.component';
import { UserEditListComponent } from './user-edit-list/user-edit-list.component';
import { ServiceEditListComponent } from './service-edit-list/service-edit-list.component';
import { BaseSlideDownComponent } from '@core/base/components/base-slide-down.component';

@NgModule({
	declarations: [
		AdditionalComponent,
		UserEditListComponent,
		ServiceEditListComponent,
		BaseSlideDownComponent,
	],
	imports: [
		CommonModule,
		AdditionalRoutingModule,
		FormsModule,
		ReactiveFormsModule,
	],
})
export class AdditionalModule {}
