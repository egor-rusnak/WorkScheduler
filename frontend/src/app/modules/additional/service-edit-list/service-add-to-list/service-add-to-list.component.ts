import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceDto } from '@core/models/service-dto';
import { ServiceTypeDto } from '@core/models/service-type-dto';
import { HttpInternalService } from '@core/services/http-internal.service';

@Component({
	selector: 'app-service-add-to-list',
	templateUrl: './service-add-to-list.component.html',
	styleUrls: ['./service-add-to-list.component.scss'],
})
export class ServiceAddToListComponent implements OnInit {
	@Output() closeEmit = new EventEmitter();
	serviceGroup: FormGroup;
	selectedServiceType: ServiceTypeDto;
	isShowInputFieldsForService: boolean = false;

	public servicesTypes: ServiceTypeDto[];

	@Input() inputService: ServiceDto;
	@Input() inputServiceType: ServiceTypeDto;

	constructor(protected client: HttpInternalService) {
		this._createDefaultServiceGroup();
		this.selectedServiceType = null;
		this.servicesTypes = [] as ServiceTypeDto[];
		this._loadServiceTypes();
	}

	ngOnInit(): void {
		this.getServiceType();
		this.selectedServiceType = {
			id: 'e24a9c1c-427e-49bd-9c15-445de0eaf04a',
			name: 'Маникюршица',
		};
	}

	_createDefaultServiceGroup() {
		this.serviceGroup = new FormGroup({
			serviceType: new FormControl(null),
			//this.inputService != null ? this.getServiceType() : null
			serviceTypeName: new FormControl(
				this.inputServiceType != null
					? this.inputServiceType.name
					: null
			),
			serviceName: new FormControl(
				this.inputService != null ? this.inputService.name : null
			),
			durationTime: new FormControl(
				this.inputService != null
					? this.inputService.durationTime
					: null
			),
			cost: new FormControl(
				this.inputService != null ? this.inputService.cost : null
			),
		});
	}

	getServiceType() {
		if (this.inputService == null) {
			return null;
		}
		this.getSingleServiceType(this.inputService.serviceTypeId);
	}

	getSingleServiceType(recordId) {
		this.client
			.getRequest<ServiceTypeDto>(
				`Services/Types/GetServiceType/${recordId}`
			)
			.subscribe((result) => {
				this.serviceGroup.get('serviceType').patchValue(result);
				this.selectedServiceType = result;
			});
	}

	private _loadServiceTypes() {
		this.client
			.getRequest<ServiceTypeDto[]>('Services/Types/GetAllServiceTypes')
			.subscribe((result) => {
				this.servicesTypes = result;
			});
	}

	onSelectedServiceType(event: any) {
		this.isShowInputFieldsForService = this.selectedServiceType != null;
	}

	save() {
		if (this.selectedServiceType == null && this.inputServiceType == null) {
			this.saveServiceType();
		} else if (
			this.selectedServiceType == null &&
			this.inputServiceType !== null
		) {
			this.updateServiceType();
		} else {
			this.saveService();
		}
	}

	cancel() {
		this.closeEmit.emit(null);
	}

	saveService() {
		const name = this.serviceGroup.get('serviceName').value;
		const durationTime = this.serviceGroup.get('durationTime').value;
		const cost = this.serviceGroup.get('cost').value;
		const serviceTypeId = this.selectedServiceType.id;
		const model = { name, durationTime, cost, serviceTypeId } as ServiceDto;
		this.client
			.postRequest<ServiceTypeDto>('Service/Create', model)
			.subscribe((result) => {
				this.closeEmit.emit(null);
			});
	}

	saveServiceType() {
		const name = this.serviceGroup.get('serviceTypeName').value;
		this.client
			.postRequest<ServiceTypeDto>('Services/Types/CreateType', {
				name,
			} as ServiceTypeDto)
			.subscribe((result) => {
				this.closeEmit.emit(null);
			});
	}

	updateServiceType() {
		const name = this.serviceGroup.get('serviceTypeName').value;
		this.client
			.putRequest<ServiceTypeDto>(
				`Services/Types/UpdateType/${this.inputServiceType.id}`,
				{ name } as ServiceTypeDto
			)
			.subscribe((result) => {
				this.closeEmit.emit(null);
			});
	}

	updateService() {
		const name = this.serviceGroup.get('serviceName').value;
		const durationTime = this.serviceGroup.get('durationTime').value;
		const cost = this.serviceGroup.get('cost').value;
		const serviceTypeId = this.selectedServiceType.id;
		const model = { name, durationTime, cost, serviceTypeId } as ServiceDto;
		this.client
			.putRequest<ServiceDto>(
				`Services/Types/Update/${this.inputService.id}`,
				{ model }
			)
			.subscribe((result) => {
				this.closeEmit.emit(null);
			});
	}
}
