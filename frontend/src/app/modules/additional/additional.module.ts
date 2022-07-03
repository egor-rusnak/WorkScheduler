import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

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
		MatButtonModule,
		MatInputModule,
		FormsModule,
		ReactiveFormsModule,
		MatTableModule,
		MatIconModule,
	],
})
export class AdditionalModule {}
