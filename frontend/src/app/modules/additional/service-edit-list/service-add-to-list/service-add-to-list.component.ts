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
	selectedServiceType: string;
	isShowInputFieldsForService: boolean = false;

	public servicesTypes: ServiceTypeDto[];

	constructor(protected client: HttpInternalService) {
		this.selectedServiceType = null;
		this.servicesTypes = [] as ServiceTypeDto[];
		this._loadServiceTypes();
	}

	ngOnInit(): void {
		this._createDefaultServiceGroup();
	}

	_createDefaultServiceGroup() {
		this.serviceGroup = new FormGroup({
			serviceType: new FormControl(null),
			serviceTypeName: new FormControl(null),
			serviceName: new FormControl(null),
			durationTime: new FormControl(null),
			cost: new FormControl(null),
		});
		this.serviceGroup.controls.serviceType.valueChanges.subscribe(
			(result) => {
				this.isShowInputFieldsForService = result != null;
			}
		);
	}

	private _loadServiceTypes() {
		this.client
			.getRequest<ServiceTypeDto[]>('Services/Types/GetAllServiceTypes')
			.subscribe((result) => {
				this.servicesTypes = result;
			});
	}

	onSelectedServiceType(value: any) {
		this.isShowInputFieldsForService = value != 'null';
		this.selectedServiceType = value;
	}

	save() {
		if (this.selectedServiceType == 'null') {
			this.saveServiceType();
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
		const serviceTypeId = this.serviceGroup.get('serviceType').value;
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
}
