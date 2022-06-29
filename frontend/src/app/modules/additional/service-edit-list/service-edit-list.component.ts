import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-service-edit-list',
	templateUrl: './service-edit-list.component.html',
	styleUrls: ['./service-edit-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceEditListComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
