import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user-edit-list',
	templateUrl: './user-edit-list.component.html',
	styleUrls: ['./user-edit-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditListComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
