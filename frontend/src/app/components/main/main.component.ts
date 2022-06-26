import { Component, OnInit } from '@angular/core';
import { SampleService } from '@core/services/sample/sample.service';
import { delay } from 'rxjs';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
	title: string = 'HA';
	array: string[] = ['Ha', 'ha', 'hA'];

	constructor(private service: SampleService) {}

	ngOnInit(): void {}

	public click() {
		this.title = 'HA';
		this.service
			.getAnswer()
			.pipe(delay(1000))
			.subscribe((result) => {
				this.title = result;
				this.array = [...this.array, result];
			});
	}
}
