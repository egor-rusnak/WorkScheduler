import { formatDate } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	ɵDEFAULT_LOCALE_ID,
} from '@angular/core';

@Component({
	selector: 'app-calendar-view',
	templateUrl: './calendar-view.component.html',
	styleUrls: ['./calendar-view.component.scss'],
})
export class CalendarViewComponent implements OnInit {
	public timedRows: TimeRow[];
	constructor() {
		this.timedRows = [] as TimeRow[];
		this.initTimedRows();
	}
	initTimedRows() {
		let moveTime: Date = new Date('01-01-0001 10:00');
		for (let i = 0; i < 9; i++) {
			moveTime.setHours(10 + i);
			this.timedRows.push({
				index: i,
				time: formatDate(moveTime, 'HH:mm', ɵDEFAULT_LOCALE_ID),
				billed: false,
			});
		}
	}
	ngOnInit(): void {}

	//#region View
	//TODO: REFACTOR THIS SHIT
	isEnd: boolean = true;
	public isTouched: boolean = false;
	public startSelection: number;
	public endSelection: number;
	touchStart(event: Event, index: number) {
		if (this.isTouched) {
			this.unTouch();
			return;
		}
		this.isTouched = true;
		this.isEnd = false;
		this.startSelection = index;
		this.endSelection = index;
	}
	touch(event: Event, index: number) {
		console.log(index);
		if (this.isTouched && !this.isEnd) {
			this.endSelection = index;
		}
	}
	touchEnd(event: Event, index: number) {
		if (this.isTouched) {
			this.isEnd = true;
			this.endSelection = index;
		}
	}
	unTouch() {
		this.startSelection = -1;
		this.endSelection = -1;
		this.isTouched = false;
		return;
	}
	addClick() {
		this.timedRows.forEach((r, index) => {
			if (this.checkIsInSelection(index)) {
				r.billed = true;
			}
		});
		this.unTouch();
	}
	public checkIsInSelection(index: number) {
		return (
			(index >= this.startSelection && index <= this.endSelection) ||
			(index <= this.startSelection && index >= this.endSelection)
		);
	}
	//#endregion
}

class TimeRow {
	time: string;
	index: number;
	billed: boolean;
}
