import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDto } from '@core/models/user-dto';
import {
	animate,
	state,
	style,
	transition,
	trigger,
} from '@angular/animations';

import { HttpInternalService } from '@core/services/http-internal.service';
import { catchError } from 'rxjs';

@Component({
	selector: 'app-user-edit-list',
	templateUrl: './user-edit-list.component.html',
	styleUrls: ['./user-edit-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition(
				'expanded <=> collapsed',
				animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
			),
		]),
	],
})
export class UserEditListComponent implements OnInit {
	userInfoForm: FormGroup;

	dataSource = null;
	columnsToDisplay = ['name', 'phone'];
	columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
	expandedElement: PeriodicElement | null;

	constructor(protected client: HttpInternalService) {
		this._createForm();
	}

	private _createForm() {
		this.userInfoForm = new FormGroup({
			Name: new FormControl(null),
			Phone: new FormControl(null),
		});
	}

	ngOnInit(): void {}

	saveUser() {
		console.log('save');
		const name = this.userInfoForm.get('Name').value;
		const phone = this.userInfoForm.get('Phone').value;
		console.log(name);
		console.log(phone);
		const model = new UserDto();
		const model2 = { ...this.userInfoForm.value };
		model.name = name;
		model.phone = phone;
		console.log(model);
		console.log(model2);

		this.client
			.postRequest<UserDto>('Users/Create', model)
			.subscribe((result) => {
				alert(result.name);
			});
	}

	show() {
		this.dataSource = [{ name: 'artem', phone: '23432423' }] as UserDto[];
	}
}

export interface PeriodicElement {
	name: string;
	phone: string;
}
