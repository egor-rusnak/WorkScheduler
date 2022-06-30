import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDto } from '@core/models/user-dto';

import { HttpInternalService } from '@core/services/http-internal.service';
import { catchError } from 'rxjs';

@Component({
	selector: 'app-user-edit-list',
	templateUrl: './user-edit-list.component.html',
	styleUrls: ['./user-edit-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditListComponent implements OnInit {
	userInfoForm: FormGroup;

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
			.postRequest<UserDto>('SaveUser', model)
			.subscribe((result) => {
				alert(result.name);
			});
	}
}
