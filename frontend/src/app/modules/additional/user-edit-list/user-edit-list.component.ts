import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDto } from '@core/models/user-dto';
import {
	animate,
	state,
	style,
	transition,
	trigger,
} from '@angular/animations';
import { ElementRef } from '@angular/core';

import { HttpInternalService } from '@core/services/http-internal.service';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

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
	isAddMode: boolean = false;

	dataSource = null;
	columnsToDisplay = ['name', 'phone'];
	columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
	expandedElement: PeriodicElement | null;

	constructor(
		protected client: HttpInternalService,
		protected router: Router
	) {
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
		const model = new UserDto();
		model.name = name;
		model.phone = phone;
		console.log(model);

		this.client
			.postRequest<UserDto>('Users/Create', model)
			.subscribe((result) => {
				alert(result.name);
			});
	}

	show() {
		this.dataSource = [
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
			{ name: 'artem', phone: '23432423' },
		] as UserDto[];
	}

	close(withAnimation: boolean) {
		this.el.nativeElement.classList.remove('slideUp');
		if (withAnimation) {
			this.el.nativeElement.classList.add('slideDown');
			new Promise((resolve) => setTimeout(resolve, 400)).then(() =>
				this.router.navigate(['../additional'])
			);
		} else {
			this.router.navigate(['../additional']);
		}
	}

	@ViewChild('someVar') el: ElementRef;
	@ViewChild('someBtn') elBtn: ElementRef;

	touchmove(event: TouchEvent) {
		const touch = event.targetTouches[0];
		this.el.nativeElement.style.top =
			touch.pageY < this.minLineHeight
				? this.el.nativeElement.style.top
				: touch.pageY + 'px';
		if (event.targetTouches[0].pageY > this.closeLineHeight) {
			this.close(false);
		}
		this.endPosition = event.targetTouches[0].pageY;
		// event.preventDefault();
		event.stopPropagation();
	}

	closeLineHeight: number;
	minLineHeight: number;
	endPosition: number;
	startPosition: number;

	touchstart(event: TouchEvent) {
		console.log(`start:${event.targetTouches[0].pageY}`);
		this.startPosition = event.targetTouches[0].pageY;
		this.closeLineHeight =
			(screen.height - this.startPosition) * 0.5 + this.startPosition;
		this.minLineHeight = this.startPosition * 0.5;

		this.elBtn.nativeElement.classList.add('simple-line-active');
	}

	touchend(event: TouchEvent) {
		this.elBtn.nativeElement.classList.remove('simple-line-active');

		if (this.endPosition > this.startPosition) {
			this.el.nativeElement.style.top = '';
		}
		if (this.endPosition < this.closeLineHeight) {
			this.el.nativeElement.style.top = '';
		}
	}
}

export interface PeriodicElement {
	name: string;
	phone: string;
}
