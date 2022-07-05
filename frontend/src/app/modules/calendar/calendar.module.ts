import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
	imports: [CommonModule, CalendarRoutingModule],
})
export class CalendarModule {}
