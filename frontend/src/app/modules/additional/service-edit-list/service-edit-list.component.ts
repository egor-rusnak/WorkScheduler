import {
	ChangeDetectionStrategy,
	Component,
	ComponentRef,
	EventEmitter,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
	trigger,
	state,
	style,
	animate,
	transition,
} from '@angular/animations';
import { BaseSlideDownComponent } from '@core/base/components/base-slide-down.component';

export const slideUpAnimation = trigger('slideUpAnimation', [
	transition(':enter', [
		style({
			opacity: 1,
			transform: 'translateY(200%)',
		}),
		animate('0.4s', style({ opacity: 1, transform: '*' })),
	]),
]);

@Component({
	selector: 'app-service-edit-list',
	templateUrl: './service-edit-list.component.html',
	styleUrls: [
		'./service-edit-list.component.scss',
		'../additional.component.scss',
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [slideUpAnimation],
})
export class ServiceEditListComponent
	extends BaseSlideDownComponent
	implements OnInit
{
	serviceInfoForm: FormGroup;

	@Output() closeEmit = new EventEmitter();

	constructor() {
		super();
		this._createForm();
	}

	private _createForm() {
		this.serviceInfoForm = new FormGroup({
			Name: new FormControl(null),
			Phone: new FormControl(null),
		});
	}

	ngOnInit(): void {}

	closeEvent() {
		this.closeEmit.emit(null);
	}
}
