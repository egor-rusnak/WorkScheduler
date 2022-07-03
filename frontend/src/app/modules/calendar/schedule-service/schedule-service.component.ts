import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
	hideBlockAnimation,
	leftSlideAbsoluteAnimation,
} from '@mod/animations';

@Component({
	selector: 'app-schedule-service',
	templateUrl: './schedule-service.component.html',
	styleUrls: ['./schedule-service.component.scss'],
	animations: [hideBlockAnimation, leftSlideAbsoluteAnimation],
})
export class ScheduleServiceComponent implements OnInit {
	public closing: boolean = false;
	@Output() closeEvent: EventEmitter<string> = new EventEmitter<string>();

	constructor() {}

	ngOnInit(): void {}

	close(event) {
		if (!this.closing) {
			event.preventDefault();
			this.closing = true;
			setInterval(() => this.closeEvent.emit(null), 150);
		}
	}
}
