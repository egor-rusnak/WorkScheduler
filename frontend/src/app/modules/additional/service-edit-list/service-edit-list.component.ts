import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';
import { ServiceTypeDto } from '@core/models/service-type-dto';
import { HttpInternalService } from '@core/services/http-internal.service';
import { ServiceDto } from '@core/models/service-dto';

@Component({
	selector: 'app-service-edit-list',
	templateUrl: './service-edit-list.component.html',
	styleUrls: [
		'./service-edit-list.component.scss',
		'../additional.component.scss',
	],
})
export class ServiceEditListComponent implements OnInit {
	serviceInfoForm: FormGroup;
	serviceTypeInfoGroup: FormGroup;
	@Output() closeEmit = new EventEmitter();

	public serviceTypes: ServiceTypeDto[];
	selectedServiceType: ServiceTypeDto;

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
	}

	openEditPage(type) {
		this.selectedServiceType = type;
	}
}
