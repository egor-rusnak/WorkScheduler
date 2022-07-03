import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CalendarRoutingModule } from './calendar-routing.module';

import { CalendarComponent } from './calendar.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { ScheduleServiceComponent } from './schedule-service/schedule-service.component';

@NgModule({
	declarations: [
		CalendarComponent,
		CalendarViewComponent,
		ScheduleServiceComponent,
	],
	imports: [
		CommonModule,
		CalendarRoutingModule,
		MatDividerModule,
		MatButtonModule,
	],
})
export class CalendarModule {}
