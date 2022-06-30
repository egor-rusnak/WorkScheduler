import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-user-edit-list',
	templateUrl: './user-edit-list.component.html',
	styleUrls: ['./user-edit-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditListComponent implements OnInit {
	form: FormGroup;

	constructor() {}

	ngOnInit(): void {}
}
