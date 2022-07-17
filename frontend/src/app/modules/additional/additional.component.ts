import { animateChild, query, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-additional',
	templateUrl: './additional.component.html',
	styleUrls: ['./additional.component.scss'],
	animations: [
		trigger('ngIfAnimation', [
			transition(':enter, :leave', [query('@*', animateChild())]),
		]),
	],
})
export class AdditionalComponent implements OnInit {
	constructor() {}

	isUserShow: boolean = false;
	isServiceShow: boolean = false;

	ngOnInit(): void {}
}
