import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalComponent } from './additional.component';
import { ServiceEditListComponent } from './service-edit-list/service-edit-list.component';
import { UserEditListComponent } from './user-edit-list/user-edit-list.component';

const routes: Routes = [
	{
		path: '',
		component: AdditionalComponent,
		children: [
			{ path: 'users', component: UserEditListComponent },
			{ path: 'services', component: ServiceEditListComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdditionalRoutingModule {}
