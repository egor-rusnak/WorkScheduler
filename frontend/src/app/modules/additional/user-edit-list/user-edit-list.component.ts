import {
	ChangeDetectionStrategy,
	Component,
	ComponentRef,
	EventEmitter,
	OnInit,
	Output,
	TemplateRef,
	ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDto } from '@core/models/user-dto';
import {
	animate,
	keyframes,
	state,
	style,
	transition,
	trigger,
} from '@angular/animations';
import { ElementRef } from '@angular/core';

import { HttpInternalService } from '@core/services/http-internal.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { BaseSlideDownComponent } from '@core/base/components/base-slide-down.component';

export const pullDownAnimation = trigger('pullDownAnimation', [
	transition(':enter', [
		style({
			transform: 'scaleY(0.1)',
			transformOrigin: '50% 0%',
		}),
		animate(
			'0.5s',
			keyframes([
				style({ transform: 'scaleY(0.1)' }),
				style({ transform: 'scaleY(1.1)' }),
				style({ transform: 'scaleY(1)' }),
			])
		),
	]),
	transition(':leave', [
		style({
			transform: 'scaleY(1)',
			transformOrigin: '50% 0%',
		}),
		animate('0.3s', style({ transform: 'scaleY(0)' })),
	]),
]);

@Component({
	selector: 'app-user-edit-list',
	templateUrl: './user-edit-list.component.html',
	styleUrls: [
		'./user-edit-list.component.scss',
		'../additional.component.scss',
	],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition(
				'expanded <=> collapsed',
				animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
			),
		]),
		pullDownAnimation,
	],
})
export class UserEditListComponent implements OnInit {
	userInfoForm: FormGroup;
	editedUser: UserDto | null = null;
	public users: UserDto[];
	isAddMode: boolean = false;

	@Output() closeEmit = new EventEmitter();

	@ViewChild('readOnlyTemplate', { static: false }) readOnlyTemplate:
		| TemplateRef<any>
		| undefined;

	@ViewChild('someDiv') elDiv: ElementRef;

	constructor(
		protected client: HttpInternalService,
		protected router: Router,
		protected changeDetector: ChangeDetectorRef
	) {}

	private _createForm() {
		this.userInfoForm = new FormGroup({
			Name: new FormControl(null),
			Phone: new FormControl(null),
		});
	}

	private _loadUsers() {
		this.client.getRequest<UserDto[]>('Users/Index').subscribe((result) => {
			this.users = result;
		});
	}

	ngOnInit(): void {
		this._createForm();
		this.users = [] as UserDto[];
		this._loadUsers();
	}

	saveUser() {
		console.log('save');
		const name = this.userInfoForm.get('Name').value;
		const phone = this.userInfoForm.get('Phone').value;
		const model = new UserDto();
		model.name = name;
		model.phone = phone;
		console.log(model);

		this.client
			.postRequest<UserDto>('Users/Create', model)
			.subscribe((result) => {
				alert(result.name);
				this.users.push(result);
			});
	}

	loadTemplate() {
		return this.readOnlyTemplate;
	}

	editUser(user: UserDto) {
		this.editedUser = { name: user.name, phone: user.phone };
	}
}
