import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '@mod/calendar/calendar.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'notifications',
				loadChildren: () =>
					import('@mod/notification/notification.module').then(
						(m) => m.NotificationModule
					),
			},
			{
				path: 'calendar',
				loadChildren: () =>
					import('@mod/calendar/calendar.module').then(
						(m) => m.CalendarModule
					),
			},
			{
				path: 'additional',
				loadChildren: () =>
					import('@mod/additional/additional.module').then(
						(m) => m.AdditionalModule
					),
			},
		],
	},
	{ path: 'zhepa/fuck', component: CalendarComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRoutingModule {}
