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
	selector: 'app-update-service-item',
	templateUrl: './update-service-item.component.html',
	styleUrls: ['./update-service-item.component.scss'],
})
export class UpdateServiceItemComponent implements OnInit {
	@Output() closeEmit = new EventEmitter();

	serviceGroup: FormGroup;
	isShowInputFieldsForService: boolean = false;
	selectedServiceType: string;
	public servicesTypes: ServiceTypeDto[];

	@Input() inputService: ServiceDto;
	@Input() inputServiceType: ServiceTypeDto;

	constructor(protected client: HttpInternalService) {
		this.servicesTypes = [] as ServiceTypeDto[];
		this._loadServiceTypes();
	}

	ngOnInit(): void {
		this._createDefaultServiceGroup();
		this._checkIsNeedShowServiceFields();
	}

	_setDefaultValuesInInputParams() {
		this.inputService = null;
		this.inputServiceType = null;
	}

	private _loadServiceTypes() {
		this.client
			.getRequest<ServiceTypeDto[]>('Services/Types/GetAllServiceTypes')
			.subscribe((result) => {
				this.servicesTypes = result;
			});
	}

	private _createDefaultServiceGroup() {
		this.serviceGroup = new FormGroup({
			serviceType: new FormControl(
				this.inputService == null
					? null
					: this.inputService.serviceTypeId
			),
			serviceTypeName: new FormControl(
				this.inputServiceType == null
					? null
					: this.inputServiceType.name
			),
			serviceName: new FormControl(
				this.inputService == null ? null : this.inputService.name
			),
			durationTime: new FormControl(
				this.inputService == null
					? null
					: this.inputService.durationTime
			),
			cost: new FormControl(
				this.inputService == null ? null : this.inputService.cost
			),
		});
		this.serviceGroup.controls.serviceType.valueChanges.subscribe(
			(result) => {
				this.isShowInputFieldsForService = result != null;
			}
		);
	}

	private _checkIsNeedShowServiceFields() {
		const serviceType = this.serviceGroup.get('serviceType').value;
		this.isShowInputFieldsForService = serviceType != null;
	}

	save() {
		const serviceType = this.serviceGroup.get('serviceType').value;
		if (serviceType == null) {
			this.updateServiceType();
		} else {
			this.updateService();
		}
	}

	cancel() {
		this._setDefaultValuesInInputParams();
		this.closeEmit.emit(null);
	}

	updateServiceType() {
		const name = this.serviceGroup.get('serviceTypeName').value;
		this.client
			.putRequest<ServiceTypeDto>(
				`Services/Types/UpdateType/${this.inputServiceType.id}`,
				{ name } as ServiceTypeDto
			)
			.subscribe((result) => {
				this._setDefaultValuesInInputParams();
				this.closeEmit.emit(null);
			});
	}

	updateService() {
		const name = this.serviceGroup.get('serviceName').value;
		const durationTime = this.serviceGroup.get('durationTime').value;
		const cost = this.serviceGroup.get('cost').value;
		const serviceTypeId = this.serviceGroup.get('serviceType').value;
		const model = { name, durationTime, cost, serviceTypeId } as ServiceDto;
		this.client
			.putRequest<ServiceDto>(`Services/Update/${this.inputService.id}`, {
				model,
			})
			.subscribe((result) => {
				this._setDefaultValuesInInputParams();
				this.closeEmit.emit(null);
			});
	}
}
