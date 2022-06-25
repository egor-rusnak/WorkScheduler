import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
	title: string = 'HA';
	array: string[] = ['Ha', 'ha', 'hA'];

	constructor() {}

	ngOnInit(): void {}
}
