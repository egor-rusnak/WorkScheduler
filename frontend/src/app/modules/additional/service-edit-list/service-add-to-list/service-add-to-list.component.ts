import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	OnInit,
	Output,
} from '@angular/core';

@Component({
	selector: 'app-service-add-to-list',
	templateUrl: './service-add-to-list.component.html',
	styleUrls: ['./service-add-to-list.component.scss'],
})
export class ServiceAddToListComponent implements OnInit {
	@Output() closeEmit = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}
}
