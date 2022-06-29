import { HttpInternalService } from '@core/services/http-internal.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SampleService {
	constructor(protected client: HttpInternalService) {}

	public getAnswer() {
		return this.client.getRequestString('Index');
	}
}
