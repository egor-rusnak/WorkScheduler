import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';
import { ServiceTypeDto } from '@core/models/service-type-dto';
import { HttpInternalService } from '@core/services/http-internal.service';
import { ServiceDto } from '@core/models/service-dto';

export const pullDownAnimation = trigger('pullDownAnimation', [
	transition(':enter', [
		style({
			height: '0',
			overflow: 'hidden',
			'border-width': 0,
			opacity: 0,
		}),
		animate(
			'0.3s',
			style({ height: '*', 'border-width': '*', opacity: '*' })
		),
	]),
	transition(':leave', [
		style({
			height: '*',
			overflow: 'hidden',
			'border-width': '*',
			opacity: '*',
		}),
		animate('0.3s', style({ height: '0', 'border-width': 0, opacity: 0 })),
	]),
]);

@Component({
	selector: 'app-service-edit-list',
	templateUrl: './service-edit-list.component.html',
	styleUrls: [
		'./service-edit-list.component.scss',
		'../additional.component.scss',
	],
	animations: [pullDownAnimation],
})
export class ServiceEditListComponent implements OnInit {
	serviceInfoForm: FormGroup;
	serviceTypeInfoGroup: FormGroup;
	@Output() closeEmit = new EventEmitter();
	isAddServiceTypeMode: boolean = false;
	isAddServiceMode: boolean = false;
	addBtnCaption: string = 'Add new...';
	isViewService: boolean = false;
	showEditPage: boolean = false;
	isExistsService: boolean = false;
	isAddPageShow: boolean = false;

	public serviceTypes: ServiceTypeDto[];
	selectedServiceType: ServiceTypeDto;

	public services: ServiceDto[];

	constructor(protected client: HttpInternalService) {
		this._createForms();
		this.serviceTypes = [] as ServiceTypeDto[];
		this.selectedServiceType = new ServiceTypeDto();
		this._loadServiceTypes();
	}

	private _createForms() {
		this.serviceInfoForm = new FormGroup({
			name: new FormControl(null),
			durationTime: new FormControl(null),
			serviceType: new FormControl(null),
			cost: new FormControl(null),
		});

		this.serviceTypeInfoGroup = new FormGroup({
			name: new FormControl(null),
		});
	}

	private _loadServiceTypes() {
		this.client
			.getRequest<ServiceTypeDto[]>('Service/Types/GetAllServiceTypes')
			.subscribe((result) => {
				this.serviceTypes = result;
			});
	}

	private _loadService(typeId) {
		this.client
			.getRequest<ServiceDto[]>(`Service/GetAllServices/${typeId}`)
			.subscribe((result) => {
				this.services = result;
			});
	}

	ngOnInit(): void {}

	saveService() {
		const name = this.serviceInfoForm.get('name').value;
		const durationTime = this.serviceInfoForm.get('durationTime').value;
		const cost = this.serviceInfoForm.get('cost').value;
		const serviceTypeId = this.selectedServiceType.id;
		const model = { name, durationTime, cost, serviceTypeId } as ServiceDto;
		this.client
			.postRequest<ServiceTypeDto>('Service/Types/Create', model)
			.subscribe((result) => {
				alert(result.name);
			});
	}

	saveServiceType() {
		const name = this.serviceTypeInfoGroup.get('name').value;
		console.log(name);
		const model = { name } as ServiceTypeDto;
		this.client
			.postRequest<ServiceTypeDto>('Service/Types/CreateType', model)
			.subscribe((result) => {
				this.serviceTypes.push(result);
				this.selectedServiceType = result;
			});
		this.isAddServiceTypeMode = !this.isAddServiceTypeMode;
	}

	openEditPage(type: ServiceTypeDto) {
		if (this.selectedServiceType === null) {
			this.selectedServiceType = type;
			this.isViewService = true;
			this._loadService(type.id);
		} else if (
			this.selectedServiceType.id === type.id &&
			this.isViewService
		) {
			this.selectedServiceType = null;
			this.isViewService = false;
		} else {
			this.selectedServiceType = type;
			this.isViewService = true;
			this._loadService(type.id);
		}
	}
}
