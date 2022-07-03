import {
	animate,
	animateChild,
	keyframes,
	query,
	style,
	transition,
	trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss'],
	animations: [
		trigger('ngIfAnimation', [
			transition(':enter, :leave', [query('@*', animateChild())]),
		]),
	],
})
export class CalendarComponent implements OnInit {
	isAddMode: boolean = true;
	constructor() {}

	ngOnInit(): void {}
}
