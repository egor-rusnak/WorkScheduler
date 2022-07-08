import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalComponent } from './additional.component';
import { ServiceEditListComponent } from './service-edit-list/service-edit-list.component';
import { UserEditListComponent } from './user-edit-list/user-edit-list.component';
import { ServiceAddToListComponent } from './service-edit-list/service-add-to-list/service-add-to-list.component';

const routes: Routes = [
	{ path: '', component: AdditionalComponent },
	{ path: 'users', component: UserEditListComponent },
	{ path: 'services', component: ServiceEditListComponent },
	{ path: 'servicesAdd', component: ServiceAddToListComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdditionalRoutingModule {}
